const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'));
    const current = Number(counter.innerText);
    const increment = target / 100;

    if (current < target) {
      counter.innerText = String(Math.ceil(current + increment));
      setTimeout(updateCounter, 20);
      return;
    }

    counter.innerText = String(target);
  };

  updateCounter();
});

function showTab(tab, activeButton) {
  const content = document.getElementById('tabContent');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(button => button.classList.remove('active'));

  if (activeButton) {
    activeButton.classList.add('active');
  }

  if (tab === 'mission') {
    content.innerHTML = `
      <h3>Our Company Mission</h3>
      <p>
        We help businesses grow through innovation,
        technology and creative digital solutions.
      </p>
    `;
    return;
  }

  if (tab === 'vision') {
    content.innerHTML = `
      <h3>Our Vision</h3>
      <p>
        Our vision is to become a global leader
        in digital transformation services.
      </p>
    `;
    return;
  }

  content.innerHTML = `
    <h3>Our Goal</h3>
    <p>
      Deliver high-quality services and maximize
      client satisfaction around the world.
    </p>
  `;
}
