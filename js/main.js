// ===================================
// BADAL CREATIVE PORTFOLIO - ENHANCED JS
// Advanced Interactions & Animations
// ===================================

// ===================================
// LOADING SCREEN
// ===================================
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  }
});

// ===================================
// SCROLL PROGRESS BAR
// ===================================
function updateScrollProgress() {
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
}

window.addEventListener('scroll', updateScrollProgress);

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// SCROLL ANIMATIONS (Intersection Observer)
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Trigger counter animation for stats
      if (entry.target.classList.contains('stat-item')) {
        animateCounter(entry.target);
      }

      // Trigger skill bar animation
      if (entry.target.classList.contains('skill-item')) {
        animateSkillBar(entry.target);
      }
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .card, .stat-item, .skill-item, .timeline-item'
  );

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

// ===================================
// COUNTER ANIMATION FOR STATISTICS
// ===================================
function animateCounter(element) {
  const numberElement = element.querySelector('.stat-number');
  if (!numberElement || numberElement.dataset.animated) return;

  const target = parseInt(numberElement.textContent);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      numberElement.textContent = target + (numberElement.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    } else {
      numberElement.textContent = Math.floor(current);
    }
  }, 16);

  numberElement.dataset.animated = 'true';
}

// ===================================
// SKILL BAR ANIMATION
// ===================================
function animateSkillBar(skillItem) {
  const progressBar = skillItem.querySelector('.skill-progress');
  if (!progressBar || progressBar.dataset.animated) return;

  const percentage = progressBar.dataset.percentage || '0';

  setTimeout(() => {
    progressBar.style.width = percentage + '%';
  }, 200);

  progressBar.dataset.animated = 'true';
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================================
// FORM VALIDATION
// ===================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    let isValid = true;

    // Simple validation
    if (name && name.value.trim() === '') {
      showError(name, 'Name is required');
      isValid = false;
    } else if (name) {
      removeError(name);
    }

    if (email && !isValidEmail(email.value)) {
      showError(email, 'Valid email is required');
      isValid = false;
    } else if (email) {
      removeError(email);
    }

    if (message && message.value.trim() === '') {
      showError(message, 'Message is required');
      isValid = false;
    } else if (message) {
      removeError(message);
    }

    if (isValid) {
      // Show success message
      showSuccessMessage();
      contactForm.reset();
    }
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  removeError(input);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = '#ef4444';
  errorDiv.style.fontSize = '14px';
  errorDiv.style.marginTop = '5px';
  errorDiv.textContent = message;
  input.parentElement.appendChild(errorDiv);
  input.style.borderColor = '#ef4444';
}

function removeError(input) {
  const errorMsg = input.parentElement.querySelector('.error-message');
  if (errorMsg) {
    errorMsg.remove();
  }
  input.style.borderColor = '';
}

function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 30px 50px;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
    z-index: 10000;
    animation: fadeUp 0.5s ease;
  `;
  successDiv.innerHTML = '<h3>✓ Message Sent Successfully!</h3><p>Thank you for reaching out. I\'ll get back to you soon.</p>';
  document.body.appendChild(successDiv);

  setTimeout(() => {
    successDiv.style.opacity = '0';
    successDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
    successDiv.style.transition = 'all 0.3s ease';
    setTimeout(() => successDiv.remove(), 300);
  }, 3000);
}

// ===================================
// PARALLAX EFFECT ON SCROLL
// ===================================
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    const yPos = -(window.scrollY * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
});

// ===================================
// TYPING ANIMATION FOR HERO TEXT
// ===================================
function typeWriter(element, text, speed = 50) {
  if (!element) return;

  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Optional: Add typing animation to specific elements
// Uncomment if you want to use it
// const typingElement = document.querySelector('.typing-text');
// if (typingElement) {
//   const originalText = typingElement.textContent;
//   typeWriter(typingElement, originalText, 30);
// }

// ===================================
// IMAGE LAZY LOADING
// ===================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================================
// CARD TILT EFFECT (3D)
// ===================================
function addTiltEffect() {
  const cards = document.querySelectorAll('.card, .project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Initialize tilt effect
document.addEventListener('DOMContentLoaded', addTiltEffect);

// ===================================
// TESTIMONIAL SLIDER (If implemented)
// ===================================
class TestimonialSlider {
  constructor(container) {
    this.container = document.querySelector(container);
    if (!this.container) return;

    this.slides = this.container.querySelectorAll('.testimonial-card');
    this.currentSlide = 0;
    this.init();
  }

  init() {
    if (this.slides.length <= 1) return;

    // Hide all slides except first
    this.slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
    });

    // Auto slide every 5 seconds
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.slides[this.currentSlide].style.display = 'none';
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].style.display = 'block';
  }
}

// Initialize testimonial slider if exists
// new TestimonialSlider('.testimonials-container');

// ===================================
// MOUSE CURSOR EFFECT (Optional)
// ===================================
function initCustomCursor() {
  const cursor = document.createElement('div');
  const cursorFollower = document.createElement('div');

  cursor.className = 'cursor';
  cursorFollower.className = 'cursor-follower';

  document.body.appendChild(cursor);
  document.body.appendChild(cursorFollower);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  // Scale cursor on hover
  const interactiveElements = document.querySelectorAll('a, button, .card, .btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursorFollower.style.transform = 'scale(1.3)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorFollower.style.transform = 'scale(1)';
    });
  });
}

// Uncomment to enable custom cursor (desktop only)
// if (window.innerWidth > 768) {
//   initCustomCursor();
//   document.body.classList.add('custom-cursor');
// }

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================
console.log('%c👋 Welcome to Badal\'s Portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a creative video editor & cinematographer? Let\'s connect!', 'color: #3b82f6; font-size: 14px;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/badal-agarwal-88731a245/', 'color: #10b981; font-size: 12px;');

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
  // Any additional scroll handlers can go here
}, 10));

// ===================================
// PREVENT FOUC (Flash of Unstyled Content)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
});
