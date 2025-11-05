document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  const header = document.querySelector('header');
  const dropdownItems = document.querySelectorAll('.has-dropdown');

  const setDropdownExpanded = (expanded) => {
    dropdownItems.forEach(item => {
      const trigger = item.querySelector('a');
      if (trigger) {
        trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      }
    });
  };

  if (menuToggle && navList) {
    const toggleMenu = () => {
      navList.classList.toggle('open');
      menuToggle.classList.toggle('active');
      setDropdownExpanded(navList.classList.contains('open'));
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
      }
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuToggle.classList.remove('active');
        setDropdownExpanded(false);
      });
    });
  }

  if (dropdownItems.length) {
    setDropdownExpanded(false);

    dropdownItems.forEach(item => {
      const trigger = item.querySelector('a');
      const dropdown = item.querySelector('.dropdown');
      if (!trigger || !dropdown) {
        return;
      }

      const openItem = () => trigger.setAttribute('aria-expanded', 'true');
      const closeItem = () => {
        if (!navList || !navList.classList.contains('open')) {
          trigger.setAttribute('aria-expanded', 'false');
        }
      };

      item.addEventListener('mouseenter', openItem);
      item.addEventListener('mouseleave', closeItem);

      trigger.addEventListener('focus', openItem);
      trigger.addEventListener('blur', (event) => {
        if (!item.contains(event.relatedTarget)) {
          closeItem();
        }
      });

      dropdown.addEventListener('focusout', (event) => {
        if (!item.contains(event.relatedTarget)) {
          closeItem();
        }
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const animateOnView = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnView, {
    threshold: 0.12
  });

  document.querySelectorAll('.card, .nutrient-card, .highlight-box, .tip-box, .food-category, .product-gallery figure, .conclusion-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
