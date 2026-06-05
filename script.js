// 1. Define the data content for different feature clicks
const featureData = {
  "media": {
    title: "Interactive Media Experience",
    description: "Bring your catalogue to life with rich multimedia content. Showcase products using images, videos, audio, and animations to create a more engaging and immersive customer experience.",
    visualHTML: `
      <div class="mockup-page left-page">
        <span class="hotspot-label label-audio">Audio</span>
        <div class="page-content-box" style="display:flex; flex-direction:column; height:100%; padding: 5px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <p class="mockup-heading" style="margin:0; font-size: 1rem; text-align:left;">BRING YOUR<br><strong>CATALOGUE</strong><br>TO <strong>LIFE</strong></p>
            <div class="audio-icon-sim" style="background:#fff; color:#000; border:2px solid #8bc34a; font-size:1rem; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center;">🔊</div>
          </div>
          <span class="hotspot-label label-images">Images</span>
          <div class="mockup-img-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-top: 15px;">
            <div class="grid-img"><img src="https://picsum.photos/100/70?random=1" alt="thumb" style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></div>
            <div class="grid-img"><img src="https://picsum.photos/100/70?random=2" alt="thumb" style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></div>
            <div class="grid-img" style="grid-column: span 2;"><img src="https://picsum.photos/210/120?random=3" alt="thumb" style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></div>
          </div>
        </div>
      </div>
      <div class="mockup-page right-page" style="padding:10px;">
        <div class="page-content-box video-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=4') no-repeat center/cover; position:relative; border-radius:4px;">
          <div class="video-play-sim" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:40px; height:40px; background:rgba(255,255,255,0.8); border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">▶</div>
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
      <div class="mockup-page left-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=5') no-repeat center/cover; border-radius:4px;"></div>
      </div>
      <div class="mockup-page right-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=6') no-repeat center/cover; border-radius:4px;"></div>
      </div>
    `
  },
  "buttons": {
    title: "Interactive Buttons & Hotspots",
    description: "Create actionable hotspots, buttons, and callouts that let buyers explore specs, previews, and purchase options directly from the catalogue.",
    visualHTML: `
      <div class="mockup-page left-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=7') no-repeat center/cover; border-radius:4px; position:relative;">
           <div style="position:absolute; top:20%; left:20%; background:#fff; padding:5px 15px; border-radius:20px; font-weight:bold; font-size:0.8rem; box-shadow:0 4px 6px rgba(0,0,0,0.1); cursor:pointer;">+ Details</div>
        </div>
      </div>
      <div class="mockup-page right-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=8') no-repeat center/cover; border-radius:4px; position:relative;">
           <div style="position:absolute; bottom:15%; right:15%; background:#ff5722; color:#fff; padding:8px 20px; border-radius:4px; font-weight:bold; font-size:0.8rem; box-shadow:0 4px 6px rgba(0,0,0,0.2); cursor:pointer;">Buy Now</div>
        </div>
      </div>
    `
  },
  "linking": {
    title: "Internal & External Linking",
    description: "Link catalogue sections to product pages, contact forms, or external campaigns for a seamless customer journey from discovery to conversion.",
    visualHTML: `
      <div class="mockup-page left-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=9') no-repeat center/cover; border-radius:4px;"></div>
      </div>
      <div class="mockup-page right-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=10') no-repeat center/cover; border-radius:4px;"></div>
      </div>
    `
  },
  "lead-gen": {
    title: "Lead Generation Form",
    description: "Capture buyer interest with an integrated enquiry and lead collection form directly inside the catalogue experience.",
    visualHTML: `
      <div class="mockup-page left-page" style="padding:10px;">
        <div class="page-content-box" style="height:100%; width:100%; background: url('https://picsum.photos/250/350?random=11') no-repeat center/cover; border-radius:4px;"></div>
      </div>
      <div class="mockup-page right-page" style="padding:15px; display:flex; flex-direction:column; justify-content:center;">
        <div class="page-content-box" style="background:#f9f9f9; padding:20px; border-radius:8px; border:1px solid #ddd; text-align:left;">
          <h4 style="margin:0 0 15px 0; font-size:1rem; color:#333;">Request a Quote</h4>
          <input type="text" placeholder="Your Name" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:4px;" disabled>
          <input type="email" placeholder="Email Address" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:4px;" disabled>
          <button style="width:100%; padding:10px; background:#1a1a1a; color:#fff; border:none; border-radius:4px; font-weight:bold;">Submit</button>
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
