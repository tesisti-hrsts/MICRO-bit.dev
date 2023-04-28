//import { AngularAppOptions } from '@teambit/angular-apps';
//import { BrowserOptions, DevServerOptions } from '@teambit/angular-common';

const angularOptions/*: BrowserOptions & DevServerOptions*/ = {
  main: './src/main.ts',
  polyfills: './src/polyfills.ts',
  index: './src/index.html',
  tsConfig: './tsconfig.app.json',
  assets: ['./src/assets'],
  styles: ['./src/styles.scss'],
};

export const AngularAppOptions/*: AngularAppOptions*/ = {
  /**
   * Name of the app in Bit CLI.
   */
  name: 'angular-app',

  /**
   * Angular options for `bit build`
   */
  angularBuildOptions: angularOptions,

  /**
   * Angular options for `bit run`
   */
  angularServeOptions: angularOptions,

  /**
    * Folder containing the main file of your application
    */
  sourceRoot: './src',
};

export default AngularAppOptions;
