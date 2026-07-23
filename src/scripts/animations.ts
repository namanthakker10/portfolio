import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveals() {
  const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  targets.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      }
    );
  });
}

function initStaggerGroups() {
  const groups = gsap.utils.toArray<HTMLElement>("[data-stagger-group]");
  groups.forEach((group) => {
    const items = Array.from(group.children) as HTMLElement[];
    if (!items.length) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
        },
      }
    );
  });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;
  const lines = hero.querySelectorAll<HTMLElement>("[data-hero-line]");
  const fade = hero.querySelectorAll<HTMLElement>("[data-hero-fade]");

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.fromTo(
    lines,
    { yPercent: 110, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 }
  ).fromTo(
    fade,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
    "-=0.5"
  );
}

function initTimelineComet() {
  const spine = document.querySelector<HTMLElement>("[data-timeline-spine]");
  const comet = document.querySelector<HTMLElement>("[data-timeline-comet]");
  const progress = document.querySelector<HTMLElement>("[data-timeline-progress]");
  const container = document.querySelector<HTMLElement>("[data-timeline]");
  if (!spine || !comet || !container) return;

  const scrollConfig = {
    trigger: spine,
    start: "top 40%",
    end: "bottom 60%",
    scrub: 0.6,
  };

  gsap.set(comet, { top: 0 });
  gsap.to(comet, {
    top: "100%",
    ease: "none",
    scrollTrigger: { ...scrollConfig },
  });

  if (progress) {
    gsap.set(progress, { height: "0%" });
    gsap.to(progress, {
      height: "100%",
      ease: "none",
      scrollTrigger: { ...scrollConfig },
    });
  }

  const nodes = gsap.utils.toArray<HTMLElement>("[data-timeline-node]");
  nodes.forEach((node) => {
    gsap.fromTo(
      node,
      { scale: 0.7, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(3)",
        scrollTrigger: {
          trigger: node,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const cards = gsap.utils.toArray<HTMLElement>("[data-timeline-card]");
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    );
  });
}

function initCounters() {
  const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
  counters.forEach((el) => {
    const target = parseFloat(el.dataset.counter || "0");
    const decimals = el.dataset.counterDecimals ? parseInt(el.dataset.counterDecimals) : 0;
    const suffix = el.dataset.counterSuffix || "";
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
        });
      },
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>("header");
  if (!header) return;
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: { targets: header, className: "is-scrolled" },
  });
}

export function initAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf("*");

  if (prefersReducedMotion()) {
    document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger-group] > *").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
      const target = el.dataset.counter || "0";
      const decimals = el.dataset.counterDecimals ? parseInt(el.dataset.counterDecimals) : 0;
      const suffix = el.dataset.counterSuffix || "";
      el.textContent = parseFloat(target).toFixed(decimals) + suffix;
    });
    return;
  }

  initReveals();
  initStaggerGroups();
  initHero();
  initTimelineComet();
  initCounters();
  initHeaderScroll();

  ScrollTrigger.refresh();
}

document.addEventListener("astro:page-load", initAnimations);
