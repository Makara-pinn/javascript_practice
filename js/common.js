document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

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
