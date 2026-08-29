/* ============================================
   TYPED.JS — Hero subtitle
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed-output", {
    strings: ["Bug Bounty Hunter.", "Security Researcher."],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1800,
    loop: true,
    smartBackspace: true,
  });

  /* ============================================
     NAVBAR — highlight active section on scroll
  ============================================ */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mainNav = document.getElementById("mainNav");

  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active-link",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));

  /* ============================================
     NAVBAR — add .scrolled class after scroll
  ============================================ */
  window.addEventListener("scroll", () => {
    mainNav.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* ============================================
     SMOOTH SCROLL — close mobile nav on link click
  ============================================ */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapseEl = document.getElementById("navMenu");
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) bsCollapse.hide();
    });
  });
});

/* ============================================
     STATS — count-up animation on scroll into view
  ============================================ */
const statNumbers = document.querySelectorAll(".stat-number");

const animateCount = (el) => {
  const target = parseInt(el.getAttribute("data-target"), 10) || 0;
  const duration = 2500;
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const statObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

statNumbers.forEach((el) => statObserver.observe(el));
