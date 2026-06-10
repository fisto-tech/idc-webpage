const imageBase = "assets/images/content-images";

const featureData = {
  media: {
    title: "Interactive Media Experience",
    description: "Bring your catalogue to life with rich multimedia content. Showcase products using images, videos, audio, and animations to create a more engaging and immersive customer experience",
    image: `${imageBase}/interactive-media-experience.webp`
  },
  gifs: {
    title: "GIFs & Dynamic Animations",
    description: "Capture attention instantly with animated content and smooth visual effects that make your catalogue more interactive and engaging.",
    image: `${imageBase}/gifs-and-dynamic-animations.webp`
  },
  buttons: {
    title: "Interactive Buttons and Hotspots",
    description: "Turn static pages into interactive experiences with clickable buttons, hotspots, and action-driven content.",
    image: `${imageBase}/interactive-buttons-and-hotspots.webp`
  },
  linking: {
    title: "Internal & External Linking",
    description: "Connect users directly to websites, products, landing pages, or specific catalogue sections with a single click.",
    image: `${imageBase}/internal-and-external-linking.webp`
  },
  "smart-nav": {
    title: "Smart Navigation & Table of Contents",
    description: "Help users quickly find information through structured navigation and interactive content organization.",
    image: `${imageBase}/smart-navigation.webp`
  },
  discovery: {
    title: "Search & Content Discovery",
    description: "Allow users to instantly find products and content through powerful search and category navigation.",
    image: `${imageBase}/content-discovery.webp`
  },
  "lead-gen": {
    title: "Lead Generation & Contact Forms",
    description: "Convert visitors into potential customers with built-in forms and enquiry options.",
    image: `${imageBase}/lead-generation-form.webp`
  },
  gallery: {
    title: "Gallery & Library Experience",
    description: "Organize products, catalogues, and media content in visually appealing gallery and library layouts.",
    image: `${imageBase}/gallery-and-library.webp`
  },
  presentation: {
    title: "Advanced Product Presentation",
    description: "Present products in a more informative and interactive way to help customers make better decisions.",
    image: `${imageBase}/product-presentation.webp`
  },
  "linking-prod": {
    title: "Product Tags & Smart Product Linking",
    description: "Connect related products and improve product discovery with intelligent product linking.",
    image: `${imageBase}/smart-product-linking.webp`
  },
  embed: {
    title: "Embedded Content Integration",
    description: "Enhance your catalogue by embedding external content directly within pages.",
    image: `${imageBase}/embedded-content.webp`
  },
  branding: {
    title: "Branding & Customization",
    description: "Customize every aspect of your catalogue to match your brand identity and create a professional experience.",
    image: `${imageBase}/customised-branding.webp`
  },
  domain: {
    title: "Custom Domain & White Label Branding",
    description: "Deliver a fully branded experience using your own domain and company identity.",
    image: `${imageBase}/custom-domain.webp`
  },
  flip: {
    title: "Realistic Page Flip Experience",
    description: "Access powerful viewing tools including zoom controls, full screen mode, page navigation, quick page access, sharing options, downloads, and background audio controls for a smooth and interactive reading experience.",
    image: `${imageBase}/page-flip-effects.webp`
  },
  "360-view": {
    title: "360\u00b0 Product Visualization",
    description: "Allow customers to view products from every angle for a more immersive experience.",
    image: `${imageBase}/360-product-visualisation.webp`
  },
  ar: {
    title: "Augmented Reality (AR) Experience",
    description: "Bring products into the real world with immersive AR experiences accessible through mobile devices.",
    image: `${imageBase}/ar-experience.webp`
  },
  slideshow: {
    title: "Automatic Slideshow",
    description: "Enhance the viewing experience with automated page transitions and customizable slideshow controls.",
    image: `${imageBase}/automatic-slideshow.webp`
  },
  mobile: {
    title: "Designed for Every Screen",
    description: "Enjoy a seamless viewing experience across smartphones, tablets, laptops, and desktops.",
    image: `${imageBase}/designed-for-every-screen.webp`
  },
  analytics: {
    title: "Analytics & Customer Insights",
    description: "Track user engagement and gain valuable insights into customer behavior and content performance.",
    image: `${imageBase}/analytics-and-customer-insights.webp`
  },
  fingertips: {
    title: "Analytics & Customer Insights",
    description: "Access powerful viewing tools including zoom controls, full screen mode, page navigation, quick page access, sharing options, downloads, and background audio controls for a smooth and interactive reading experience.",
    image: `${imageBase}/everything-at-your-fingertips.webp`
  }
};

const featureMenu = document.getElementById("feature-menu");
const titleElement = document.getElementById("feature-title");
const descriptionElement = document.getElementById("feature-description");
const visualImage = document.getElementById("feature-visual-image");
const featureKeys = Array.from(featureMenu?.querySelectorAll("li[data-feature]") || [])
  .map((item) => item.dataset.feature)
  .filter((key) => featureData[key]);

const product360Item = featureMenu?.querySelector('li[data-feature="360-view"]');
if (product360Item) product360Item.textContent = "360\u00b0 Product Visualization";

let currentIndex = Math.max(featureKeys.indexOf("media"), 0);
let rotateTimer = null;
const ROTATE_MS = 1000000;

function setActiveFeature(featureKey) {
  const feature = featureData[featureKey];
  if (!feature) return;

  const previewText = document.querySelector('.preview-text');
  
  if (previewText) {
    previewText.classList.remove('fade-in');
    visualImage.classList.remove('slide-in');
    void previewText.offsetWidth; // Trigger reflow
  }

  titleElement.textContent = feature.title;
  descriptionElement.textContent = feature.description;
  visualImage.src = feature.image;
  visualImage.alt = `${feature.title} preview`;

  if (previewText) {
    previewText.classList.add('fade-in');
    visualImage.classList.add('slide-in');
  }

  featureMenu.querySelectorAll("li").forEach((item) => item.classList.remove("active"));
  const selectedItem = featureMenu.querySelector(`li[data-feature="${featureKey}"]`);
  if (selectedItem) {
    selectedItem.classList.add("active");
    selectedItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function advanceFeature() {
  if (!featureKeys.length) return;
  currentIndex = (currentIndex + 1) % featureKeys.length;
  setActiveFeature(featureKeys[currentIndex]);
}

function startAutoRotate() {
  stopAutoRotate();
  rotateTimer = setInterval(advanceFeature, ROTATE_MS);
}

function stopAutoRotate() {
  if (!rotateTimer) return;
  clearInterval(rotateTimer);
  rotateTimer = null;
}

const iconSVGs = {
  media: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  gifs: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><text x="7" y="15" font-size="7" font-weight="600" fill="currentColor" stroke="none" font-family="sans-serif">GIF</text></svg>`,
  buttons: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><circle cx="6.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  linking: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  'smart-nav': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`,
  discovery: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  'lead-gen': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  presentation: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 10h4v4H6z"/><line x1="14" y1="10" x2="18" y2="10"/><line x1="14" y1="13" x2="18" y2="13"/></svg>`,
  'linking-prod': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/><line x1="12" y1="17" x2="17" y2="12"/></svg>`,
  embed: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  branding: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  domain: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  flip: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  '360-view': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/><path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"/><ellipse cx="12" cy="12" rx="10" ry="4"/><text x="6" y="10" font-size="6" font-weight="700" fill="currentColor" stroke="none" font-family="sans-serif">360</text></svg>`,
  ar: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  slideshow: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/><polyline points="7 21 12 17 17 21"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  analytics: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  fingertips: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/><rect x="10" y="9" width="12" height="11" rx="2"/><path d="M14 14h4"/></svg>`
};

document.querySelectorAll('#feature-menu li[data-feature]').forEach(li => {
  const feature = li.dataset.feature;
  const text = li.textContent.trim();
  const svg = iconSVGs[feature] || iconSVGs['media'];
  li.innerHTML = `
    <div class="nav-icon">${svg}</div>
    <div class="nav-text">${text}</div>
    <div class="nav-arrow">
      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `;
});

featureMenu?.addEventListener("click", (event) => {
  const clickedItem = event.target.closest("li[data-feature]");
  if (!clickedItem) return;

  const key = clickedItem.dataset.feature;
  const index = featureKeys.indexOf(key);
  if (index >= 0) currentIndex = index;
  setActiveFeature(key);
  startAutoRotate();
});

window.addEventListener("DOMContentLoaded", () => {
  setActiveFeature(featureKeys[currentIndex] || featureKeys[0]);
  startAutoRotate();
});

window.addEventListener("beforeunload", stopAutoRotate);




// ─── Constants ───────────────────────────

const PRELOADER_SESSION_KEY = "fisto-idc-preloader-done";
const PRELOADER_MIN_MS = 3200;   // minimum display time (ms)
const PRELOADER_EXIT_MS = 500;   // fade-out duration (ms)

// ─── Asset discovery ─────────────────────
function collectPreloadAssets() {
  const cssAssets = Array.isArray(window.CSS_BACKGROUND_ASSETS) ? window.CSS_BACKGROUND_ASSETS : [];
  const urls = new Set(cssAssets);

  document.querySelectorAll("img[src]").forEach((img) => {
    if (img.src) urls.add(img.getAttribute("src") || img.src);
  });

  Object.values(featureData).forEach((feature) => {
    if (feature.image) urls.add(feature.image);
  });

  return [...urls].filter(Boolean);
}

// ─── Image preloader ─────────────────────
function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";

    const finish = () => resolve({ url, ok: true });
    const fail = () => resolve({ url, ok: false });

    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", fail, { once: true });
    image.src = url;

    if (image.complete && image.naturalWidth > 0) finish();
  });
}

// ─── Wait for external stylesheets ──────
function waitForStylesheets() {
  const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
  return Promise.all(
    links.map(
      (link) =>
        new Promise((resolve) => {
          if (link.sheet) { resolve(); return; }
          link.addEventListener("load", () => resolve(), { once: true });
          link.addEventListener("error", () => resolve(), { once: true });
        })
    )
  );
}

// ─── Font loading ────────────────────────
function waitForFonts() {
  if (!document.fonts?.ready) return Promise.resolve();
  return document.fonts.ready.catch(() => undefined);
}

// ─── Session helpers ─────────────────────
function hasSeenPreloaderThisSession() {
  try {
    return sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1";
  } catch { return false; }
}

function markPreloaderSeen() {
  try { sessionStorage.setItem(PRELOADER_SESSION_KEY, "1"); }
  catch { /* ignore */ }
}

// ─── UI updater ─────────────────────────
function updatePreloaderUI(percent, valueEl, srEl, fillEl) {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  const padded = String(clamped).padStart(2, "0");

  if (valueEl) valueEl.textContent = padded + "%";
  if (srEl) srEl.textContent = `${clamped}% loaded`;
  if (fillEl) fillEl.style.width = `${clamped}%`;
}

// ─── Wait until all conditions met ──────
function waitForPreloaderComplete(getState) {
  return new Promise((resolve) => {
    let displayPercent = 0;

    const tick = () => {
      const { loaded, total, allAssetsDone, startedAt } = getState();
      const elapsed = performance.now() - startedAt;
      const assetPercent = total ? (loaded / total) * 100 : 100;
      const timePercent = Math.min(100, (elapsed / PRELOADER_MIN_MS) * 100);

      let goal;
      if (!allAssetsDone) {
        goal = Math.min(assetPercent, 97);
      } else {
        goal = Math.min(100, Math.max(assetPercent, timePercent));
      }

      displayPercent += (goal - displayPercent) * 0.07;
      updatePreloaderUI(displayPercent, getState().valueEl, getState().srEl, getState().fillEl);

      const ready =
        allAssetsDone &&
        displayPercent >= 99.5 &&
        elapsed >= PRELOADER_MIN_MS &&
        loaded >= total;

      if (ready) {
        updatePreloaderUI(100, getState().valueEl, getState().srEl, getState().fillEl);
        resolve();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

// ─── Main preloader runner ──────────────
async function runPreloader() {
  if (hasSeenPreloaderThisSession()) {
    document.body.classList.remove("is-loading");
    return;
  }

  const preloader = document.getElementById("fisto-preloader");
  const progressFill = preloader?.querySelector(".preloader-bar-fill");
  const percentValue = preloader?.querySelector(".preloader-percent");
  const percentSr = preloader?.querySelector(".preloader-sr");
  const startedAt = performance.now();

  if (!preloader) {
    document.body.classList.remove("is-loading");
    return;
  }

  await waitForStylesheets();

  const assets = collectPreloadAssets();
  const totalSteps = assets.length + 2;
  let loaded = 1;
  let allAssetsDone = false;

  const state = () => ({
    loaded,
    total: totalSteps,
    allAssetsDone,
    startedAt,
    valueEl: percentValue,
    srEl: percentSr,
    fillEl: progressFill
  });

  const onAssetSettled = () => { loaded += 1; };

  const imageLoads = assets.map((url) => preloadImage(url).then(onAssetSettled));
  const fontLoad = waitForFonts().then(() => { loaded += 1; });

  Promise.all([...imageLoads, fontLoad]).then(() => {
    loaded = totalSteps;
    allAssetsDone = true;
  });

  await waitForPreloaderComplete(state);

  markPreloaderSeen();

  await new Promise((resolve) => setTimeout(resolve, 280));

  preloader.classList.add("is-exiting");
  document.body.classList.remove("is-loading");

  await new Promise((resolve) => setTimeout(resolve, PRELOADER_EXIT_MS));
  preloader.remove();
}

// ─── Kick off ────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  runPreloader().then(() => {
    if (typeof window.initApp === "function") {
      try { window.initApp(); } catch (err) { console.error('initApp() error:', err); }
    } else {
      // initApp is optional; log for debugging
      console.debug('initApp is not defined; skipping app init.');
    }
  });
});