import { getCrypto } from './getCrypto.js';
import { cryptoCards } from './templates.js';

export const renderCryptos = async (filterKey) => {
  try {
    const mainContent = document.getElementById('shows');
    const container = document.getElementById('shows-character');
    container.innerHTML = '';

    const cryptos = await getCrypto();

    let filteredCryptos = cryptos;

    if (filterKey === 'maxlink') {
      filteredCryptos = cryptos.filter(
        (crypto) => crypto.max_supply > 500000000
      );
      filteredCryptos.sort((a, b) => b.max_supply - a.max_supply);
    } else if (filterKey === 'lowlink') {
      filteredCryptos = cryptos.filter(
        (crypto) => crypto.max_supply < 500000000
      );
      filteredCryptos.sort((a, b) => a.max_supply - b.max_supply);
    }

    filteredCryptos.forEach((crypto) => {
      const card = document.createElement('div');
      card.classList.add(
        'col',
        'foo',
        'col-sm-6',
        'col-md-4',
        'col-lg-3',
        'py-3'
      );
      card.innerHTML = cryptoCards(crypto);
      container.appendChild(card);
    });
    mainContent.appendChild(container);
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
  }
};
