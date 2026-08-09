const cartItemsContainer = document.getElementById('cart-items');
const cartSummary = document.getElementById('cart-summary');
const summaryCount = document.getElementById('summary-count');
const summaryTotal = document.getElementById('summary-total');
const checkoutBtn = document.getElementById('checkout-btn');

function parsePrice(price) {
  return Number(price.replace(/[^0-9.]/g, '')) || 0;
}

function formatMoney(value) {
  return `$${value.toLocaleString('en-US')}`;
}

function saveAndRender(items) {
  window.MaramallCart.saveItems(items);
  window.MaramallCart.updateBadges();
  renderCart();
}

function renderCart() {
  const items = window.MaramallCart.getItems();
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);

  cartSummary.textContent = `${totalQuantity} item${totalQuantity === 1 ? '' : 's'} saved`;
  summaryCount.textContent = totalQuantity;
  summaryTotal.textContent = formatMoney(totalPrice);

  if (!items.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-bag-shopping"></i>
        <h2>Your cart is empty</h2>
        <p>Start shopping and your selected items will appear here.</p>
        <a href="shop.html">Shop Now</a>
      </div>
    `;
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  cartItemsContainer.innerHTML = items.map(item => `
    <article class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <span class="cart-item-label">Maramall Pick</span>
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
      </div>
      <div class="item-actions">
        <button class="qty-btn" type="button" data-action="decrease" aria-label="Decrease ${item.name}">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="qty-btn" type="button" data-action="increase" aria-label="Increase ${item.name}">+</button>
        <button class="remove-btn" type="button" data-action="remove" aria-label="Remove ${item.name}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </article>
  `).join('');
}

cartItemsContainer.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  const itemElement = event.target.closest('.cart-item');

  if (!button || !itemElement) {
    return;
  }

  const action = button.dataset.action;
  const items = window.MaramallCart.getItems();
  const item = items.find(cartItem => cartItem.id === itemElement.dataset.id);

  if (!item) {
    return;
  }

  if (action === 'increase') {
    item.quantity += 1;
  }

  if (action === 'decrease') {
    item.quantity -= 1;
  }

  const nextItems = action === 'remove' || item.quantity <= 0
    ? items.filter(cartItem => cartItem.id !== item.id)
    : items;

  saveAndRender(nextItems);
});

checkoutBtn.addEventListener('click', () => {
  alert('Checkout is ready for the next step.');
});

renderCart();
