const cryptoCards = (crypto) => `
<div class='card h-100 '>
  <img  src='${crypto.icon_url}' class='card-img-top' alt='...' />
  <div class='card-body'>
    <h5 class='card-title'>${crypto.name_full}</h5>
    <p class='card-text'>
    Symbol: ${crypto.symbol}<br>
    Max Supply: ${crypto.max_supply}
    </p>
  </div>
</div>

`;

const profile = () => `
<div class='cards'>
            <img class='prof' src='./assets/images/skype.jpg' alt='John'  >
            <h1>John Doe</h1>
            <p class='title'>CEO & Founder, Example</p>
            <p>Harvard University</p>
            <a  href='#'><i class='fa fa-dribbble'></i></a>
            <a href='#'><i class='fa fa-twitter'></i></a>
            <a href='#'><i class='fa fa-linkedin'></i></a>
            <a href='#'><i class='fa fa-facebook'></i></a>
            <p><button>Contact</button></p>
          </div>
`;

export { cryptoCards, profile };
