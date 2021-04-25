import {render} from 'react-dom';
import Modal from 'react-modal';
import App from './App';
// https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
//https://github.com/matthewkoncz/ivosjatek/issues/186
Modal.setAppElement('#app') // Could have added ariaHideApp={false}, but it is not recommended. 
render(App(), document.getElementById('app'));
