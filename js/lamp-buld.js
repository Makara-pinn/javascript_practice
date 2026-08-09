const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
  });
});

const collectionProducts = document.querySelectorAll('.products .product-card');
const currentPage = window.location.pathname.split('/').pop();
const collectionRatings = [4.8, 4.6, 4.9, 4.7, 4.5, 4.8, 4.4, 4.7, 4.9, 4.6];

const collectionCatalogs = {
  'lamp-buld.html': [
    ['Glass Pendant Light', '$95'],
    ['Brass Desk Lamp', '$120'],
    ['Modern Table Lamp', '$145'],
    ['Woven Pendant Light', '$130'],
    ['Minimal Floor Lamp', '$210'],
    ['Ceramic Bedside Lamp', '$100'],
    ['Classic Reading Lamp', '$120'],
    ['Round Shade Lamp', '$125'],
    ['Wood Accent Lamp', '$135'],
    ['Matte Black Desk Lamp', '$115'],
    ['Hanging Dome Light', '$155'],
    ['Warm Glow Table Lamp', '$140']
  ],
  'plants.html': [
    ['Ceramic Orchid Pot', '$38'],
    ['Monstera Floor Plant', '$52'],
    ['Fiddle Leaf Fig', '$58'],
    ['Snake Plant Pot', '$45'],
    ['Peace Lily Planter', '$55'],
    ['Mini Succulent Set', '$28'],
    ['Hanging Ivy Basket', '$42'],
    ['Rubber Plant Pot', '$49'],
    ['Bonsai Table Plant', '$56'],
    ['Tall Areca Palm', '$59'],
    ['Lavender Flower Pot', '$34'],
    ['White Rose Planter', '$48']
  ]
};

const prepareCatalog = {
  dest: [
    ['Desk Organizer Tray', '$32'],
    ['Padded Desk Chair', '$145'],
    ['Modern Study Chair', '$180'],
    ['Compact Desk Stool', '$95'],
    ['Ergonomic Desk Chair', '$210'],
    ['Wooden Desk Shelf', '$75'],
    ['Storage Side Cabinet', '$120'],
    ['Small Work Table', '$165'],
    ['Desk Accessory Set', '$45'],
    ['Minimal Laptop Stand', '$55']
  ],
  wall: [
    ['Round Wall Clock', '$65'],
    ['Framed Wall Art Set', '$90'],
    ['Abstract Wall Panel', '$125'],
    ['Vintage Tick Wall Clock', '$80'],
    ['Fish Wall Sculpture', '$95'],
    ['Decorative Wall Shelf', '$70'],
    ['Modern Wall Mirror', '$135'],
    ['Wood Wall Accent', '$115'],
    ['Gallery Photo Frame', '$60'],
    ['Luxury Wall Decor', '$125']
  ]
};

function getPrepareCollectionCategory(card) {
  const title = card.querySelector('h3')?.textContent.toLowerCase() || '';

  if (
    title.includes('wall') ||
    title.includes('clock') ||
    title.includes('picture') ||
    title.includes('fish') ||
    title.includes('tic')
  ) {
    return 'wall';
  }

  return 'dest';
}

function applyCollectionCatalog() {
  if (!collectionProducts.length) {
    return;
  }

  if (currentPage === 'prepare-items.html') {
    const counts = { dest: 0, wall: 0 };

    collectionProducts.forEach(card => {
      const category = card.dataset.category || getPrepareCollectionCategory(card);
      const details = prepareCatalog[category];
      const detail = details[counts[category] % details.length];
      const title = card.querySelector('h3');
      const price = card.querySelector('.price');
      const image = card.querySelector('img');

      card.dataset.category = category;
      if (title) {
        title.textContent = detail[0];
      }

      if (price) {
        price.textContent = detail[1];
      }

      if (image) {
        image.alt = detail[0];
      }
      counts[category] += 1;
    });

    return;
  }

  const catalog = collectionCatalogs[currentPage];

  if (!catalog) {
    return;
  }

  collectionProducts.forEach((card, index) => {
    const detail = catalog[index % catalog.length];
    const title = card.querySelector('h3');
    const price = card.querySelector('.price');
    const image = card.querySelector('img');

    if (title) {
      title.textContent = detail[0];
    }

    if (price) {
      price.textContent = detail[1];
    }

    if (image) {
      image.alt = detail[0];
    }
  });
}

function addCollectionRatings() {
  collectionProducts.forEach((card, index) => {
    const price = card.querySelector('.price');
    const ratingValue = collectionRatings[index % collectionRatings.length];
    const filledStars = Math.round(ratingValue);
    const stars = Array.from({ length: 5 }, (_, starIndex) => {
      return `<span class="${starIndex < filledStars ? 'filled' : ''}">★</span>`;
    }).join('');
    let rating = card.querySelector('.rating');

    if (!price) {
      return;
    }

    if (!rating) {
      rating = document.createElement('div');
      rating.className = 'rating';
      price.before(rating);
    }

    rating.innerHTML = `<span class="stars">${stars}</span><span class="rating-score">${ratingValue.toFixed(1)}</span>`;
    rating.setAttribute('aria-label', `${ratingValue.toFixed(1)} out of 5 stars`);
  });
}

function addCollectionBuyButtons() {
  collectionProducts.forEach(card => {
    const title = card.querySelector('h3')?.textContent.trim() || 'product';
    let button = card.querySelector('button');

    if (!button) {
      button = document.createElement('button');
      card.append(button);
    }

    button.type = 'button';
    button.textContent = 'Buy Now';
    button.setAttribute('aria-label', `Buy ${title} now`);
  });
}

applyCollectionCatalog();
addCollectionRatings();
addCollectionBuyButtons();
