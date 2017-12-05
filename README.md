# Electron TypeScript React Starter Kit

## Getting Started

**install nvm** _UNIX_ [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
_Windows_ [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

```
nvm install 6.12.0
nvm alias default 6.12.0
```

Then source or reopen all terminals. `nvm --version` should now return 6.12.0

Now install a recent version of NPM globally.

```
npm install -g npm@latest
```

**install and config IDE of choice**

* Webstorm
* Visual Studio Code
* Atom

**download the starter kit**

```
git clone https://github.com/soupala/etr-kit
```

**install the 3rd party packages**

```
npm install
```

**start the app in dev mode**

```
npm run dev
```

## Highlights

* Automatic transpilation, building, and hot-reloading on file save.
* Tree shaking
* Linting (AirBnB styleguide).
* Prettier auto-code formatting (Atom only)
* Example unit test with Jest.

## NOT YET IMPLEMENTED

* Prettier auto-code formatting (config and how-to guide for Webstorm and VS Code).
* State management and middleware examples.
* Example components and containers written in TypeScript.
* Debugging.
* Example E2E tests with NightmareJS.
* Yeoman-style generators.
* Example icons in /build.
* Proxy requests to multiple API endpoints crossing multiple namespaces.
* Example parallel services automatically spun up as part of dev, prod, and distribution.
* Pipes and Interfaces between UI and the parallel services.
* Self-updating distribution (delta applied from tag of Github repo, for example).

### State Management and Middleware

* selectors derive values from state, then use the selectors in mapStateToProps
* memoized selectors (reselect library)

### Install Devtron

```
$ npm install --save-dev devtron

// After starting the Electron app in dev mode, run the following from the Console tab:
require('devtron').install() // You should now see a Devtron tab added to the DevTools
```

## Study Topics

### Electron is Chrome (Multi-Process Architecture)

[link](https://www.chromium.org/developers/design-documents/multi-process-architecture)

### Main Process Vs. Renderer Process

[link](https://cdn-images-1.medium.com/max/1000/1*-zqAENneDn62xAKmrPTqnA.png)

### Cross-Process Communication

IPC

* message-like interface
* how does it work under the hood? [https://en.wikipedia.org/wiki/Named_pipe](named pipes)
* values must be serializable, meaning must be able to JSON.stringify(value)

REMOTE

* values must be serializable, meaning must be able to JSON.stringify(value)
* the built-in remote module is synchronous and may be blocking to the UI until method completes
* use
  [https://github.com/electron-userland/electron-remote](https://github.com/electron-userland/electron-remote)
  whenever possible
* modules can be written for consumption in either process

_example shared module_

```
const electron = require('electron');
const foo = electron.foo || electron.remote.foo;

// now you can use module in either main or renderer process
console.log(foo);
```

### CPU-Intensive

* renderer process task pool that will split and balance a job across multiple processes
* library for promise-like background processes that auto-scale based on usage
  [https://github.com/electron-userland/electron-remote](https://github.com/electron-userland/electron-remote)

### STATELESS VERSUS STATEFUL COMPONENTS

* [see this article](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
* [see this article](https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/README.md)

## BUILDING DISTRIBUTABLE APP

* coming soon

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
