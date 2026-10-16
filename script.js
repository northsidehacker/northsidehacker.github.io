/* ============================================
   SCRAMBLE EFFECT — Hero subtitle
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typed-output");
  const words = ["Bug Bounty Hunter.", "Security Researcher.", "CTF Player."];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&!?";
  let wordIndex = 0;

  // Add blinking cursor via JS so it matches your typed-cursor style
  el.style.borderRight = "2px solid var(--accent)";
  el.style.paddingRight = "4px";
  setInterval(() => {
    el.style.borderRightColor =
      el.style.borderRightColor === "transparent"
        ? "var(--accent)"
        : "transparent";
  }, 500);

  function scrambleTo(newWord) {
    const duration = 1200;
    const start = performance.now();

    return new Promise((resolve) => {
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);

        el.textContent = newWord
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const charProgress = Math.min((progress - i * 0.04) / 0.45, 1);
            if (charProgress >= 1) return char;
            if (charProgress <= 0)
              return chars[Math.floor(Math.random() * chars.length)];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = newWord;
          resolve();
        }
      }
      requestAnimationFrame(update);
    });
  }

  async function loop() {
    while (true) {
      await scrambleTo(words[wordIndex]);
      await new Promise((r) => setTimeout(r, 2200));
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  loop();

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

/* ============================================
   SCRAMBLE EFFECT — Hero subtitle
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typed-output");
  const words = ["Bug Bounty Hunter.", "Security Researcher.", "CTF Player."];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&!?";
  let wordIndex = 0;

  el.style.borderRight = "2px solid var(--accent)";
  el.style.paddingRight = "4px";
  setInterval(() => {
    el.style.borderRightColor =
      el.style.borderRightColor === "transparent"
        ? "var(--accent)"
        : "transparent";
  }, 500);

  function scrambleTo(newWord) {
    const duration = 1200;
    const start = performance.now();
    return new Promise((resolve) => {
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = newWord
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const charProgress = Math.min((progress - i * 0.04) / 0.45, 1);
            if (charProgress >= 1) return char;
            if (charProgress <= 0)
              return chars[Math.floor(Math.random() * chars.length)];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        if (progress < 1) requestAnimationFrame(update);
        else {
          el.textContent = newWord;
          resolve();
        }
      }
      requestAnimationFrame(update);
    });
  }

  async function loop() {
    while (true) {
      await scrambleTo(words[wordIndex]);
      await new Promise((r) => setTimeout(r, 2200));
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  loop();

  /* ============================================
     NAVBAR — active section on scroll
  ============================================ */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mainNav = document.getElementById("mainNav");

  const observer = new IntersectionObserver(
    (entries) => {
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
    },
    { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((sec) => observer.observe(sec));

  window.addEventListener("scroll", () => {
    mainNav.classList.toggle("scrolled", window.scrollY > 50);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapseEl = document.getElementById("navMenu");
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) bsCollapse.hide();
    });
  });

  /* ============================================
     PROJECT FILTER
  ============================================ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectItems.forEach((item) => {
        const visibility = item.getAttribute("data-visibility");
        const show = filter === "all" || visibility === filter;

        if (show) {
          item.style.display = "";
          // re-trigger fade-in
          item.classList.remove("fade-in");
          void item.offsetWidth; // reflow
          item.classList.add("fade-in");
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

/* ============================================
   SCROLL REVEAL — fade in sections & cards
============================================ */
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".skill-card, .project-item, .hof-card, .platform-btn")
  .forEach((el) => revealObserver.observe(el));
