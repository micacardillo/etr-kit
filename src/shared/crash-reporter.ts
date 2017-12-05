import { crashReporter } from 'electron';
import { config } from '../config';

export default function crashReporterInit() {
  crashReporter.start({
    companyName: config.PRODUCT_NAME,
    productName: config.PRODUCT_NAME,
    submitURL: config.CRASH_REPORT_URL,
  });
}
