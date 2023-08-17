import { profile } from './templates.js';

export const renderProfile = () => {
  const mainContent = document.getElementById('shows');
  const container = document.getElementById('shows-character');
  container.innerHTML = '';

  const profileCard = document.createElement('div');
  profileCard.classList.add('center-card');
  profileCard.innerHTML = profile();

  container.appendChild(profileCard);
  mainContent.appendChild(container);
};
