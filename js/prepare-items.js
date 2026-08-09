const prepareOptions = document.getElementById('shop-options');
const prepareProducts = document.querySelector('.products');

function getPrepareCategory(card) {
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

function showPrepareItems(category) {
  if (!prepareProducts) {
    return;
  }

  prepareProducts.querySelectorAll('.product-card').forEach(card => {
    const itemCategory = card.dataset.category || getPrepareCategory(card);
    const isVisible = category === 'All' || itemCategory === category;

    card.dataset.category = itemCategory;
    card.hidden = !isVisible;
    card.style.display = isVisible ? '' : 'none';
  });
}

if (prepareOptions) {
  prepareOptions.addEventListener('click', event => {
    const button = event.target.closest('.shop-option-btn');

    if (!button) {
      return;
    }

    prepareOptions.querySelectorAll('.shop-option-btn').forEach(option => {
      option.classList.toggle('active', option === button);
    });

    showPrepareItems(button.dataset.category);
  });
}

showPrepareItems('All');
