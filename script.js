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
const ROTATE_MS = 5000;

function setActiveFeature(featureKey) {
  const feature = featureData[featureKey];
  if (!feature) return;

  titleElement.textContent = feature.title;
  descriptionElement.textContent = feature.description;
  visualImage.src = feature.image;
  visualImage.alt = `${feature.title} preview`;

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
