document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('header[id], section[id]');
  const offerBanner = document.querySelector('.offer-banner');
  const offerLabel = document.getElementById('offerLabel');
  const offerTitle = document.getElementById('offerTitle');
  const offerDescription = document.getElementById('offerDescription');
  const offerButton = document.getElementById('offerButton');
  const offerImage = document.getElementById('offerImage');

  const offers = [
    {
      label: 'Limited Time Offer',
      title: 'Up to 40% Off',
      description: 'on Bestsellers',
      button: 'Grab The Deal',
      image: 'https://i.pinimg.com/1200x/7b/a1/6e/7ba16e6acf20d1620a62f2d76d687fe2.jpg',
      alt: 'Dining room furniture discount'
    },
    {
      label: 'Weekend Sale',
      title: '30% Off Sofas',
      description: 'for modern living rooms',
      button: 'Shop Sofas',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      alt: 'Sofa promotion'
    },
    {
      label: 'New Collection Deal',
      title: 'Save 25% Today',
      description: 'on tables and chairs',
      button: 'Shop Tables',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop',
      alt: 'Dining table promotion'
    },
    {
      label: 'Bedroom Special',
      title: 'Up to 35% Off',
      description: 'on bedroom furniture',
      button: 'Shop Bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      alt: 'Bedroom furniture promotion'
    }
  ];

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const updateActiveOnScroll = () => {
    const fromTop = window.scrollY + 150;
    let currentId = '';
    sections.forEach(section => {
      if (section.offsetTop <= fromTop) currentId = section.id;
    });
    if (currentId) {
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + currentId);
      });
    }
  };

  updateActiveOnScroll();
  window.addEventListener('scroll', updateActiveOnScroll);

  if (offerBanner && offerLabel && offerTitle && offerDescription && offerButton && offerImage) {
    let currentOffer = 0;

    const showOffer = (index) => {
      const offer = offers[index];

      offerBanner.classList.add('is-changing');

      setTimeout(() => {
        offerLabel.textContent = offer.label;
        offerTitle.textContent = offer.title;
        offerDescription.textContent = offer.description;
        offerButton.textContent = offer.button;
        offerImage.src = offer.image;
        offerImage.alt = offer.alt;
        offerBanner.classList.remove('is-changing');
      }, 350);
    };

    setInterval(() => {
      currentOffer = (currentOffer + 1) % offers.length;
      showOffer(currentOffer);
    }, 4000);
  }
});
