import { renderCryptos } from './renderCrypto.js';
import { renderProfile } from './renderProfile.js';

export const router = () => {
  const path = window.location.pathname;

  if (path === '/home') {
    renderCryptos();
  } else if (path === '/maxlink') {
    renderCryptos('maxlink');
  } else if (path === '/lowlink') {
    renderCryptos('lowlink');
  } else if (path === '/profile') {
    renderProfile();
  } else {
    renderCryptos(); // Render the default view for unknown paths
  }
};

// Add the popstate event listener to handle navigation
window.addEventListener('popstate', router);
