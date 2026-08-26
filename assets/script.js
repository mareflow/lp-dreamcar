document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Navbar scroll behavior
  const navbar = document.getElementById('main-navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('top-4', 'md:top-6', 'max-w-6xl');
      navbar.classList.add('top-3', 'md:top-4', 'max-w-5xl');
      const innerNav = navbar.querySelector('.nav-pill');
      if (innerNav) {
        innerNav.classList.add('shadow-[0_8px_40px_rgba(0,0,0,0.6)]');
        innerNav.classList.remove('shadow-[0_4px_24px_rgba(0,0,0,0.35)]');
      }
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('top-3', 'md:top-4', 'max-w-5xl');
      navbar.classList.add('top-4', 'md:top-6', 'max-w-6xl');
      const innerNav = navbar.querySelector('.nav-pill');
      if (innerNav) {
        innerNav.classList.remove('shadow-[0_8px_40px_rgba(0,0,0,0.6)]');
        innerNav.classList.add('shadow-[0_4px_24px_rgba(0,0,0,0.35)]');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLines = menuBtn ? menuBtn.querySelectorAll('.menu-line') : [];

  function setMobileMenu(open) {
    if (!mobileMenu) return;
    if (open) {
      mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'visible');
      document.body.style.overflow = 'hidden';

      if (menuLines.length >= 3) {
        menuLines[0].classList.add('rotate-45', 'translate-y-[6.5px]');
        menuLines[1].classList.add('opacity-0', 'scale-x-0');
        menuLines[2].classList.add('-rotate-45', '-translate-y-[6.5px]');
      }
    } else {
      mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'visible');
      document.body.style.overflow = '';

      if (menuLines.length >= 3) {
        menuLines[0].classList.remove('rotate-45', 'translate-y-[6.5px]');
        menuLines[1].classList.remove('opacity-0', 'scale-x-0');
        menuLines[2].classList.remove('-rotate-45', '-translate-y-[6.5px]');
      }
    }
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('opacity-100');
      setMobileMenu(!isOpen);
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMobileMenu(false);
      });
    });
  }

  // Scroll Reveal Animations with Intersection Observer
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

  // Support click/tap flip on mobile for perspective flip cards
  const flipCards = document.querySelectorAll('.perspective-1000');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
