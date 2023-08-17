import { renderCryptos } from './renderCrypto.js';
import { renderProfile } from './renderProfile.js';
import { router } from './routes.js';

export const addEvents = () => {
  try {
    const homelink = document.getElementById('homelink');
    const maxlink = document.getElementById('maxlink');
    const lowlink = document.getElementById('lowlink');
    const profilelink = document.getElementById('profile-card');

    router();

    homelink.addEventListener('click', (event) => {
      event.preventDefault();
      renderCryptos();
      window.history.pushState({}, '', '/home');
      router();
    });

    maxlink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState({}, '', 'maxlink');
      renderCryptos('maxlink');
      router();
    });

    lowlink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState({}, '', 'lowlink');
      renderCryptos('lowlink');
      router();
    });

    profilelink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState({}, '', '/profile');
      renderProfile();
      router();
    });
  } catch (error) {
    console.error('Error adding event listeners:', error);
  }
};
