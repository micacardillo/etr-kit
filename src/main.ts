import { app, BrowserWindow, screen } from 'electron';
import { autoUpdater } from 'electron-updater';
import crashReporter from './shared/crash-reporter';
import electronLog from 'electron-log';
import * as url from 'url';

// crashReporter();
// electronLog.transports.file.level = 'info';
// electronLog.info('App starting...');
// process.on('uncaughtException', error => console.log('error', error));

let mainWindow: Electron.BrowserWindow;

// Keep a reference for dev mode
let dev = false;
if (process.argv.indexOf('--dev') > 0) {
  dev = true;
}

function onReady() {
  autoUpdater.checkForUpdatesAndNotify();
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    height: Math.ceil(height * 0.9),
    width: Math.ceil(width * 0.9),
  });

  // and load the index.html of the app.
  let indexPath: string;
  if (dev) {
    console.log('Development Mode');
    indexPath = url.format({
      host: 'localhost:3013',
      pathname: 'index.html',
      protocol: 'http:',
      slashes: true,
    });
  } else {
    console.log('production');
    indexPath = url.format({
      pathname: `${__dirname}/index.html`,
      protocol: 'file:',
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);
  if (dev) {
    mainWindow.webContents.openDevTools();
    const added =
      BrowserWindow.getDevToolsExtensions &&
      BrowserWindow.getDevToolsExtensions().hasOwnProperty('Redux DevTools') &&
      BrowserWindow.getDevToolsExtensions().hasOwnProperty('React Developer Tools');
    if (!added) {
      BrowserWindow.addDevToolsExtension('./devtools/React/2.4.0_0');
      BrowserWindow.addDevToolsExtension('./devtools/Redux/2.15.1_0');
    }
  }
  mainWindow.on('close', () => app.quit());
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => {
  app.quit();
});
console.log(`Electron Version ${app.getVersion()}`);
