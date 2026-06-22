const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Your message has been sent successfully!');
    form.reset();
  });
}
