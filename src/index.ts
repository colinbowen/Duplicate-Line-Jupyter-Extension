import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the duplicateLine extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'duplicateLine',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension duplicateLine is activated!');
  }
};

export default extension;
