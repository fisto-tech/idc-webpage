// 1. Define the data content for different feature clicks
const featureData = {
  "media": {
    title: "Interactive Media Experience",
    description: "Bring your catalogue to life with rich multimedia content. Showcase products using images, videos, audio, and animations to create a more engaging and immersive customer experience.",
    visualHTML: `
      <div class="mockup-page left-page">
        <span class="hotspot-label label-audio">Audio</span>
        <div class="page-content-box">
          <div class="audio-icon-sim">🔊</div>
          <p class="mockup-heading">BRING YOUR CATALOGUE <br><strong>TO LIFE</strong></p>
          <div class="mockup-img-grid">
            <div class="grid-img"><img src="https://via.placeholder.com/60x40" alt="thumb"></div>
            <div class="grid-img"><img src="https://via.placeholder.com/60x40" alt="thumb"></div>
          </div>
          <span class="hotspot-label label-images">Images</span>
        </div>
      </div>
      <div class="mockup-page right-page">
        <div class="page-content-box video-box">
          <div class="video-play-sim">▶</div>
          <span class="hotspot-label label-video">Video</span>
        </div>
        <span class="hotspot-label label-animation">Animation</span>
      </div>
    `
  },
  "gifs": {
    title: "GIFs & Dynamic Animations",
    description: "Use animated GIFs and dynamic micro-interactions to draw attention, explain product features, and keep users engaged throughout the catalogue.",
    visualHTML: `
      <div class="mockup-page left-page animated-page">
        <div class="page-content-box animation-preview">
          <div class="gif-frame">GIF</div>
          <p class="mockup-text">Dynamic motion makes every product feel alive.</p>
        </div>
      </div>
      <div class="mockup-page right-page animated-page">
        <div class="page-content-box animation-preview">
          <div class="gif-frame">ANIM</div>
          <p class="mockup-text">Seamless transitions and looping visual storytelling.</p>
        </div>
      </div>
    `
  },
  "buttons": {
    title: "Interactive Buttons & Hotspots",
    description: "Create actionable hotspots, buttons, and callouts that let buyers explore specs, previews, and purchase options directly from the catalogue.",
    visualHTML: `
      <div class="mockup-page left-page action-page">
        <div class="page-content-box">
          <button class="action-button">Learn More</button>
          <button class="action-button secondary">See Specs</button>
        </div>
      </div>
      <div class="mockup-page right-page action-page">
        <div class="page-content-box">
          <span class="hotspot-label label-hotspot">Hotspot</span>
          <p class="mockup-text">Tap a callout to reveal product benefits instantly.</p>
        </div>
      </div>
    `
  },
  "linking": {
    title: "Internal & External Linking",
    description: "Link catalogue sections to product pages, contact forms, or external campaigns for a seamless customer journey from discovery to conversion.",
    visualHTML: `
      <div class="mockup-page left-page link-page">
        <div class="page-content-box">
          <p class="link-list"><a href="#">Product Detail</a></p>
          <p class="link-list"><a href="#">Video Tour</a></p>
        </div>
      </div>
      <div class="mockup-page right-page link-page">
        <div class="page-content-box">
          <p class="link-list"><a href="#">Contact Us</a></p>
          <p class="link-list"><a href="#">Order Now</a></p>
        </div>
      </div>
    `
  },
  "lead-gen": {
    title: "Lead Generation Form",
    description: "Capture buyer interest with an integrated enquiry and lead collection form directly inside the catalogue experience.",
    visualHTML: `
      <div class="mockup-page left-page form-page">
        <div class="page-content-box">
          <label>Name</label>
          <input type="text" placeholder="Your Full Name" disabled>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" disabled>
        </div>
      </div>
      <div class="mockup-page right-page form-page">
        <div class="page-content-box">
          <label>Message</label>
          <textarea placeholder="Ask about our catalogue solutions" disabled></textarea>
          <button class="submit-button" disabled>Send Inquiry</button>
        </div>
      </div>
    `
  }
};

// elements
const featureMenu = document.getElementById('feature-menu');
const titleElement = document.getElementById('feature-title');
const descriptionElement = document.getElementById('feature-description');
const visualBox = document.getElementById('feature-visual-box');

const featureKeys = Object.keys(featureData);
let currentIndex = featureKeys.indexOf('media') >= 0 ? featureKeys.indexOf('media') : 0;
let rotateTimer = null;
const ROTATE_MS = 5000;

function setActiveFeature(featureKey) {
  const feature = featureData[featureKey];
  if (!feature) return;
  if (titleElement) titleElement.textContent = feature.title;
  if (descriptionElement) descriptionElement.textContent = feature.description;
  if (visualBox) visualBox.innerHTML = feature.visualHTML;

  if (featureMenu) {
    featureMenu.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    const selectedItem = featureMenu.querySelector(`li[data-feature="${featureKey}"]`);
    if (selectedItem) {
      selectedItem.classList.add('active');
      selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
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
  if (rotateTimer) {
    clearInterval(rotateTimer);
    rotateTimer = null;
  }
}

if (featureMenu) {
  featureMenu.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('li[data-feature]');
    if (!clickedItem) return;
    const key = clickedItem.dataset.feature;
    const idx = featureKeys.indexOf(key);
    if (idx >= 0) currentIndex = idx;
    setActiveFeature(key);
    startAutoRotate(); // reset timer so user sees full interval
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveFeature(featureKeys[currentIndex] || featureKeys[0]);
  startAutoRotate();
});

window.addEventListener('beforeunload', stopAutoRotate);
