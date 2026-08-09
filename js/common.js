const CART_STORAGE_KEY = 'maramallCart';

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveCartItems(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

function getCartTotalQuantity() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0);
}

function updateCartBadges() {
  const count = getCartTotalQuantity();

  document.querySelectorAll('.cart-link, [aria-label^="Cart"]').forEach(link => {
    let badge = link.querySelector('.cart-count');

    link.href = 'cart.html';
    link.classList.add('cart-link');

    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-count';
      link.append(badge);
    }

    badge.textContent = count;
    badge.hidden = count === 0;
    link.setAttribute('aria-label', `Cart (${count} items)`);
  });
}

function showCartMessage(message) {
  let toast = document.querySelector('.cart-toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'cart-toast';
    document.body.append(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showCartMessage.timer);
  showCartMessage.timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function getProductFromCard(card) {
  const name = card.querySelector('h3')?.textContent.trim() || 'Product';
  const price = card.querySelector('.price')?.textContent.trim() || '$0';
  const image = card.querySelector('img')?.src || '';
  const id = `${name}-${price}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return { id, name, price, image, quantity: 1 };
}

function addItemToCart(product) {
  const items = getCartItems();
  const existing = items.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    items.push(product);
  }

  saveCartItems(items);
  updateCartBadges();
  window.dispatchEvent(new CustomEvent('maramall-cart-updated'));
}

window.MaramallCart = {
  getItems: getCartItems,
  saveItems: saveCartItems,
  updateBadges: updateCartBadges,
  addItem: addItemToCart
};

document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  const style = document.createElement('style');
  style.textContent = `
    .cart-link{position:relative}
    .cart-count{position:absolute;top:-10px;right:-12px;min-width:19px;height:19px;padding:0 6px;border:2px solid #fff;border-radius:999px;background:#8b5e3c;color:#fff;font-size:11px;font-weight:700;line-height:15px;text-align:center;box-shadow:0 6px 14px rgba(139,94,60,0.32)}
    .cart-toast{position:fixed;right:22px;bottom:22px;z-index:9999;padding:13px 18px;border:1px solid rgba(255,255,255,0.1);border-radius:8px;background:#2f261f;color:#fff;font:600 14px 'Poppins',sans-serif;box-shadow:0 18px 45px rgba(0,0,0,0.22);opacity:0;transform:translateY(12px);pointer-events:none;transition:opacity 0.2s ease,transform 0.2s ease}
    .cart-toast.show{opacity:1;transform:translateY(0)}
  `;
  document.head.append(style);

  updateCartBadges();

  document.addEventListener('click', event => {
    const button = event.target.closest('.product-card button');

    if (!button) {
      return;
    }

    const card = button.closest('.product-card');

    if (!card) {
      return;
    }

    const product = getProductFromCard(card);
    const originalText = button.textContent;

    addItemToCart(product);
    button.textContent = 'Added';
    showCartMessage(`${product.name} added to cart`);

    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  });

  if (!dropdownToggle || !dropdown) {
    return;
  }

  dropdownToggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  });

  dropdown.querySelectorAll('.dropdown-menu a').forEach(option => {
    option.addEventListener('click', event => {
      event.stopPropagation();
      dropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
