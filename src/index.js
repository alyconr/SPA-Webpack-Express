import { addEvents } from './modules/addevenlisteners.js';
import { router } from './modules/routes.js';
import './assets/images/skype.jpg';

addEvents();

window.addEventListener('popstate', () => {
  router();
});
