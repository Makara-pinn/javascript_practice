const shopOptions = document.getElementById('shop-options');
const productGrid = document.querySelector('.product-grid');
const categoryGrid = document.querySelector('.category-grid');
const categoryAliases = {
  'dining table': 'Table',
  'office chair': 'Chair'
};
const categoryRoutes = {
  lamp: 'lamp-buld.html',
  'bob lamp': 'lamp-buld.html',
  'preparing items': 'prepare-items.html',
  'preparing item': 'prepare-items.html'
};
const productImages = {
  Sofa: [
    'https://i.pinimg.com/1200x/37/80/c4/3780c46ab33ead40e7ee382bc4c7ec8f.jpg',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    'https://i.pinimg.com/1200x/37/80/c4/3780c46ab33ead40e7ee382bc4c7ec8f.jpg',
    'https://i.pinimg.com/736x/b7/36/9b/b7369b0bd8727e71117db0afad811f41.jpg',
    'https://i.pinimg.com/736x/e0/57/8a/e0578a2fea28e695a1ed254b3899233a.jpg',
    'https://i.pinimg.com/736x/19/f5/69/19f5691ae290d366998d92b625a03c52.jpg',
    'https://i.pinimg.com/736x/23/e6/c9/23e6c9b8a5c6ce9c043c8812ad256c34.jpg',
    'https://i.pinimg.com/736x/7e/2e/f6/7e2ef656ce0884e7e2fcc6b79128ba95.jpg',
    'https://i.pinimg.com/736x/99/bc/5b/99bc5b657f1810db38c8cebe22b22969.jpg',
    'https://i.pinimg.com/736x/b8/fc/97/b8fc97291eaa292d812310fd8fe19395.jpg',
    'https://i.pinimg.com/736x/54/b6/00/54b600da386c152a3e18fd9750a50599.jpg',
    'https://i.pinimg.com/736x/ea/c2/dd/eac2dd932beccbae431108507c8a517d.jpg',
    'https://i.pinimg.com/736x/9a/51/03/9a5103e824e6a5cbb698a4c600b50ba4.jpg',
    'https://i.pinimg.com/736x/ec/33/37/ec3337bfe5ae791e749c7b3e296e8c7d.jpg'
  ],
  Chair: [
    'https://i.pinimg.com/736x/85/a2/c5/85a2c5e07a6ca0993314f09861c48d5c.jpg',
    'https://i.pinimg.com/736x/be/d4/a1/bed4a1d4c3d27c5ab3d595e6bf4b2564.jpg',
    'https://i.pinimg.com/736x/52/77/30/5277309e6202db23708b48779358c87f.jpg',
    'https://i.pinimg.com/736x/d3/15/32/d31532f778dbc376e86d8dea3dcf3469.jpg',
    'https://i.pinimg.com/1200x/5e/b1/f8/5eb1f822e7afd7b89e48a1db44f350fe.jpg',
    'https://i.pinimg.com/736x/cc/ce/89/ccce89e00fd8578f988d4dde3b5515a0.jpg',
    'https://i.pinimg.com/1200x/21/ba/c5/21bac5303c1a7d61c739c008f6cf91bf.jpg',
    'https://i.pinimg.com/1200x/a2/ac/c1/a2acc15fac964948b0ee85e5238f5418.jpg',
    'https://i.pinimg.com/1200x/6e/59/71/6e59712a0185ebea6f1886180946d290.jpg',
    'https://i.pinimg.com/736x/0f/b0/94/0fb094e818d368b470ff1d60228f07c9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF_wJKRciUEsBZu9gxdy4CASBPj3yOUwXdQ&s',
    'https://i.pinimg.com/736x/91/b6/e0/91b6e0490030212b2e13d511f6c946fa.jpg',
    'https://i.pinimg.com/736x/d7/da/41/d7da41c0de084b1e3b9327af255acb11.jpg',
    'https://i.pinimg.com/736x/db/51/95/db519529496b547c93d1ad8b230559b0.jpg',
    'https://i.pinimg.com/736x/57/f0/85/57f085dc637e41b2ac624ab0716becc4.jpg',
    'https://i.pinimg.com/1200x/94/d4/eb/94d4ebfbed313517ed7edb6cfbbcfc66.jpg',
    'https://i.pinimg.com/1200x/3d/53/8c/3d538ceffa7d0207dc8c7f0a317d28a1.jpg',
    'https://i.pinimg.com/736x/b9/57/d4/b957d4e27db08cfb2736c71ede575d9f.jpg',
    'https://i.pinimg.com/1200x/3e/d5/d3/3ed5d3f69fef55215a6d1b81beecfe9b.jpg'
  ],
  Table: [
    'https://i.pinimg.com/736x/f3/95/de/f395de46dd7364ce9a5a03a1b6fed7c0.jpg',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1200&auto=format&fit=crop',
    'https://i.pinimg.com/736x/23/37/31/23373152bf1b93d81d60f3d14680e5e7.jpg',
    'https://i.pinimg.com/1200x/8c/dc/3f/8cdc3fad20ecaf45d71fb15d5d11616d.jpg',
    'https://i.pinimg.com/736x/ca/cb/7e/cacb7e34b9ea9677c840b10608886dd2.jpg',
    'https://i.pinimg.com/736x/cb/2c/8b/cb2c8b9e5b66bf364881003d41083de2.jpg',
    'https://i.pinimg.com/736x/89/25/27/892527d1bccab2a97e032a9650adc48d.jpg',
    'https://i.pinimg.com/736x/4b/6d/50/4b6d507337cebbf9f32538e5e7043c91.jpg',
    'https://i.pinimg.com/736x/ed/4c/cc/ed4ccca455d2b81d9a2514417bf77c5d.jpg',
    'https://i.pinimg.com/1200x/6c/98/8b/6c988b1b14d19ebc90d97e2ba8fd9ef0.jpg',
    'https://i.pinimg.com/736x/01/2d/be/012dbefe896b670fd0f6f536729c5883.jpg',
    'https://i.pinimg.com/736x/b8/f9/5f/b8f95f700b8d2300b2abb7bd33ee80f4.jpg'
  ]
};
const productDetails = {
  Sofa: [
    ['Linen Lounge Sofa', '$899'],
    ['Nordic Fabric Sofa', '$1,250'],
    ['Emerald Velvet Sofa', '$1,150'],
    ['Curved Modern Sofa', '$980'],
    ['Compact Apartment Sofa', '$1,040'],
    ['Cloud Cushion Sofa', '$1,095'],
    ['Low Profile Sofa', '$1,180'],
    ['Deep Seat Sofa', '$1,225'],
    ['Walnut Frame Sofa', '$990'],
    ['Premium Sectional Sofa', '$1,320'],
    ['Soft Modular Sofa', '$870'],
    ['Classic Living Sofa', '$940'],
    ['Boucle Accent Sofa', '$1,085'],
    ['Relaxed Family Sofa', '$995'],
    ['Luxury Modern Sofa', '$1,240']
  ],
  Chair: [
    ['Emerald Accent Chair', '$245'],
    ['Modern Dining Chair', '$210'],
    ['Curved Lounge Chair', '$265'],
    ['Green Velvet Chair', '$295'],
    ['Rocking Lounge Chair', '$340'],
    ['Soft Cushion Chair', '$310'],
    ['Minimal Armchair', '$365'],
    ['Wood Frame Chair', '$285'],
    ['Leather Desk Chair', '$230'],
    ['Cozy Reading Chair', '$255'],
    ['Simple Dining Chair', '$195'],
    ['Fabric Accent Chair', '$275'],
    ['Premium Lounge Chair', '$390'],
    ['Walnut Dining Chair', '$325'],
    ['Rounded Back Chair', '$305'],
    ['Statement Accent Chair', '$335'],
    ['Modern Side Chair', '$355'],
    ['Upholstered Armchair', '$385'],
    ['Designer Lounge Chair', '$410']
  ],
  Table: [
    ['Round Coffee Table', '$520'],
    ['Oak Dining Table', '$575'],
    ['Marble Dining Table', '$640'],
    ['Walnut Side Table', '$690'],
    ['Glass Coffee Table', '$730'],
    ['Compact End Table', '$760'],
    ['Modern Console Table', '$810'],
    ['Storage Coffee Table', '$845'],
    ['Natural Wood Table', '$890'],
    ['Minimal Dining Table', '$935'],
    ['Premium Dining Table', '$980'],
    ['Small Bedside Table', '$430'],
    ['Scandi Coffee Table', '$620']
  ]
};
const productRatings = [4.8, 4.7, 4.9, 4.6, 4.8, 4.5, 4.7, 4.9, 4.6, 4.8];
const categoryImages = {
  Sofa: productImages.Sofa[1],
  Chair: productImages.Chair[0],
  Table: productImages.Table[0]
};

function getProductCategory(card) {
  const title = card.querySelector('h3')?.textContent.toLowerCase() || '';

  if (title.includes('table') || title.includes(' ble')) {
    return 'Table';
  }

  if (title.includes('chair')) {
    return 'Chair';
  }

  if (title.includes('sofa')) {
    return 'Sofa';
  }

  return '';
}

function getCategoryFromText(text) {
  const label = text?.trim().toLowerCase() || '';

  if (categoryAliases[label]) {
    return categoryAliases[label];
  }

  if (label.includes('table') || label.includes('dining')) {
    return 'Table';
  }

  if (label.includes('chair')) {
    return 'Chair';
  }

  if (label.includes('sofa') || label.includes('sofe')) {
    return 'Sofa';
  }

  return '';
}

function getCategoryRoute(text) {
  const label = text?.trim().toLowerCase() || '';
  return categoryRoutes[label] || '';
}

function showProducts(category) {
  if (!productGrid) {
    return;
  }

  productGrid.querySelectorAll('.product-card').forEach(card => {
    const productCategory = card.dataset.category || getProductCategory(card);
    card.dataset.category = productCategory;
    const isVisible = category === 'All' || productCategory === category;

    card.hidden = !isVisible;
    card.style.display = isVisible ? '' : 'none';
  });
}

function prepareProductItems() {
  if (!productGrid) {
    return;
  }

  const imageCounts = {
    Sofa: 0,
    Chair: 0,
    Table: 0
  };

  productGrid.querySelectorAll('.product-card').forEach(card => {
    const category = card.dataset.category || getProductCategory(card);
    const image = card.querySelector('img');
    const titleElement = card.querySelector('h3');
    const priceElement = card.querySelector('.price');
    const images = productImages[category];
    const detail = productDetails[category]?.[imageCounts[category] % productDetails[category].length];

    card.dataset.category = category;

    if (detail && titleElement && priceElement) {
      titleElement.textContent = detail[0];
      priceElement.textContent = detail[1];
      card.dataset.item = detail[0];
    } else {
      card.dataset.item = titleElement?.textContent.trim() || category;
    }

    if (!image || !images?.length) {
      return;
    }

    image.src = images[imageCounts[category] % images.length];
    image.alt = card.dataset.item;
    imageCounts[category] += 1;
  });
}

function addProductRatings() {
  if (!productGrid) {
    return;
  }

  productGrid.querySelectorAll('.product-card').forEach((card, index) => {
    const title = card.querySelector('h3');
    const price = card.querySelector('.price');
    const ratingValue = productRatings[index % productRatings.length];
    const filledStars = Math.round(ratingValue);
    const stars = Array.from({ length: 5 }, (_, starIndex) => {
      return `<span class="${starIndex < filledStars ? 'filled' : ''}">★</span>`;
    }).join('');
    let rating = card.querySelector('.rating');

    if (!title || !price) {
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

function addBuyNowButtons() {
  if (!productGrid) {
    return;
  }

  productGrid.querySelectorAll('.product-card').forEach(card => {
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

function updateCategoryImages() {
  if (!categoryGrid) {
    return;
  }

  categoryGrid.querySelectorAll('.category-card').forEach(card => {
    const label = card.querySelector('p')?.textContent.trim();
    const category = getCategoryFromText(label);
    const image = card.querySelector('img');

    if (!category || !image) {
      return;
    }

    card.dataset.category = category;
    image.src = categoryImages[category];
    image.alt = label;
  });
}

function setActiveCategory(category, shouldScroll = false) {
  const selectedCategory = categoryAliases[category?.toLowerCase()] || category || 'All';

  if (shopOptions) {
    shopOptions.querySelectorAll('.shop-option-btn').forEach(option => {
      option.classList.toggle('active', option.dataset.category === selectedCategory);
    });
  }

  showProducts(selectedCategory);

  if (shouldScroll && productGrid) {
    productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

if (shopOptions) {
  shopOptions.addEventListener('click', event => {
    const button = event.target.closest('.shop-option-btn');

    if (!button) {
      return;
    }

    setActiveCategory(button.dataset.category);
  });
}

if (categoryGrid) {
  categoryGrid.querySelectorAll('.category-card').forEach(card => {
    const label = card.querySelector('p')?.textContent.trim();
    const category = getCategoryFromText(label);
    const route = getCategoryRoute(label);

    if (route) {
      card.dataset.href = route;
      card.tabIndex = 0;
      card.setAttribute('role', 'link');
    } else if (category && ['Table', 'Sofa', 'Chair'].includes(category)) {
      card.dataset.category = category;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
    }
  });

  categoryGrid.addEventListener('click', event => {
    const card = event.target.closest('.category-card[data-category], .category-card[data-href]');

    if (!card || categoryGrid.classList.contains('is-dragging')) {
      return;
    }

    if (card.dataset.href) {
      window.location.href = card.dataset.href;
      return;
    }

    setActiveCategory(card.dataset.category, true);
  });

  let isDragging = false;
  let isPaused = false;
  let startX = 0;
  let startScrollLeft = 0;

  const loopPoint = () => categoryGrid.scrollWidth / 2;

  function autoScroll() {
    if (!isPaused && !isDragging) {
      categoryGrid.scrollLeft += 0.6;

      if (categoryGrid.scrollLeft >= loopPoint()) {
        categoryGrid.scrollLeft = 0;
      }
    }

    requestAnimationFrame(autoScroll);
  }

  categoryGrid.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  categoryGrid.addEventListener('mouseleave', () => {
    isPaused = false;
    isDragging = false;
    categoryGrid.classList.remove('is-dragging');
  });

  categoryGrid.addEventListener('mousedown', event => {
    isDragging = true;
    isPaused = true;
    startX = event.pageX;
    startScrollLeft = categoryGrid.scrollLeft;
    categoryGrid.classList.add('is-dragging');
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    isPaused = false;
    categoryGrid.classList.remove('is-dragging');
  });

  categoryGrid.addEventListener('mousemove', event => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
    categoryGrid.scrollLeft = startScrollLeft - (event.pageX - startX);
  });

  categoryGrid.addEventListener('keydown', event => {
    const card = event.target.closest('.category-card[data-category], .category-card[data-href]');

    if (!card || !['Enter', ' '].includes(event.key)) {
      return;
    }

    event.preventDefault();
    if (card.dataset.href) {
      window.location.href = card.dataset.href;
      return;
    }

    setActiveCategory(card.dataset.category, true);
  });

  categoryGrid.addEventListener('touchstart', () => {
    isPaused = true;
  }, { passive: true });

  categoryGrid.addEventListener('touchend', () => {
    isPaused = false;
  });

  categoryGrid.addEventListener('scroll', () => {
    if (categoryGrid.scrollLeft >= loopPoint()) {
      categoryGrid.scrollLeft = 0;
    }
  });

  autoScroll();
}

prepareProductItems();
addProductRatings();
addBuyNowButtons();
updateCategoryImages();
setActiveCategory('All');
