const imageBase = "assets/images/content-images";

const featureData = {
  media: {
    title: "Interactive Media Experience",
    description: "Bring your catalogue to life with rich multimedia content. Showcase products using images, videos, audio, and animations to create a more engaging and immersive customer experience",
    htmlContent: `
      <div class="fisto-vw-wrapper media-wrapper">
        <img class="custom-feature-img media-bg" src="assets/images/content-images/images-videos-and-gifs/catalogue-image.webp" alt="Catalogue">
        <div id="media-svg-container" class="media-svg-container"></div>
      </div>
    `
  },
  gifs: {
    title: "GIFs & Dynamic Animations",
    description: "Capture attention instantly with animated content and smooth visual effects that make your catalogue more interactive and engaging.",
    image: `${imageBase}/gifs-and-dynamic-animations.webp`
  },
  buttons: {
    title: "Interactive Buttons & Hotspots",
    description: "Turn static pages into interactive experiences with clickable buttons, hotspots, and action-driven content.",
    htmlContent: `
      <div class="fisto-vw-wrapper">
        <img class="custom-feature-img interactive-buttons-hotspots" src="assets/images/content-images/interactive-buttons-hotspot/flipbook-image.webp" alt="Interactive Buttons and Hotspots">
        <div id="interactive-hotspot-svg-container" class="svg-overlay-container"></div>
        <div id="interactive-button-svg-container" class="svg-overlay-container""></div>
      </div>
    `
  },
  linking: {
    title: "Internal & External Linking",
    description: "Connect users directly to websites, products, landing pages, or specific catalogue sections with a single click.",
    image: `${imageBase}/internal-and-external-linking.webp`
  },
  "smart-nav": {
    title: "Smart Navigation & Table of Contents",
    description: "Help users quickly find information through structured navigation and interactive content organization.",
    htmlContent: `
      <div class="fisto-vw-wrapper smart-nav-wrapper">

        <!-- Left column: TOC popup only -->
        <div class="sn-left-col">
          <div class="sn-toc-popup anim-popup">
            <div class="sn-toc-header">Table of Contents</div>
            <div class="sn-toc-list">
              <div class="sn-toc-item"><span>Introduction</span><span>01</span></div>
              <div class="sn-toc-item"><span>About us</span><span>02</span></div>
              <div class="sn-toc-item"><span>Why Choose us</span><span>03</span></div>
              <div class="sn-toc-item"><span>Our Products</span><span>04</span></div>
              <div class="sn-toc-item"><span>Gallery Page</span><span>05</span></div>
              <div class="sn-toc-item"><span>360 Product View</span><span>06</span></div>
              <div class="sn-toc-item"><span>Vision and Mission</span><span>08</span></div>
              <div class="sn-toc-item"><span>Contact us</span><span>09</span></div>
            </div>
          </div>
        </div>

        <!-- Arrows: absolutely positioned relative to wrapper -->
        <img class="sn-black-arrow anim-arrow" src="assets/images/content-images/smart-navigation/black-arrow.svg" alt="Arrow">
        <img class="sn-white-arrow anim-arrow" src="assets/images/content-images/smart-navigation/white-arrow.svg" alt="White Arrow">

        <!-- Right area: desktop image bleeding off the right -->
        <div class="sn-right-col">
          <img class="custom-feature-img sn-bg" src="assets/images/content-images/smart-navigation/desktop-image.webp" alt="Desktop Image">
        </div>

        <!-- Thumbnails spanning full bottom -->
        <div class="sn-thumbnails-popup anim-popup-bottom">
          <div class="sn-thumbnails-scroll">
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-01.webp" alt="Thumb 1">
              <span>Page 1</span>
            </div>
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-02.webp" alt="Thumb 2">
              <span>Page 2-3</span>
            </div>
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-03.webp" alt="Thumb 3">
              <span>Page 4-5</span>
            </div>
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-04.webp" alt="Thumb 4">
              <span>Page 6-7</span>
            </div>
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-05.webp" alt="Thumb 5">
              <span>Page 8-9</span>
            </div>
            <div class="sn-thumb-item">
              <img src="assets/images/content-images/smart-navigation/thumbnail-image-06.webp" alt="Thumb 6">
              <span>Page 10</span>
            </div>
          </div>
        </div>

      </div>
    `
  },
  discovery: {
    title: "Search & Content Discovery",
    description: "Allow users to instantly find products and content through powerful search and category navigation.",
    htmlContent: `
      <div class="fisto-vw-wrapper search-filter-wrapper">
        <div class="sf-inner-container">
          <img class="custom-feature-img sf-bg" src="assets/images/content-images/search-and-filter-functionality/desktop-catalogue-image.webp" alt="Catalogue Background">
          
          <img src="assets/images/content-images/search-and-filter-functionality/white-arrow.svg" class="sf-arrow" alt="Arrow">
          
          <div class="sf-search-container">
            <div class="sf-input-wrapper">
              <svg class="sf-search-icon" viewBox="0 0 24 24" width="24" height="24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="sf-search-input" class="sf-search-input" placeholder="Search..." autocomplete="off">
            </div>
            <div class="sf-dropdown" id="sf-dropdown">
              <div class="sf-dropdown-title">Recommended</div>
              <ul id="sf-results-list" class="sf-results-list">
                <!-- Injected via JS -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  background: {
    title: "Background Customization ( Colors, Themes & Videos,images )",
    description: "Customize every aspect of your catalogue to match your brand identity and create a professional experience.",
    htmlContent: `
      <div class="fisto-vw-wrapper bg-custom-wrapper">
        <div class="bg-center-container">
          <div class="bg-catalogue-wrapper">
            <div class="bg-custom-layers">
              <div class="bg-layer active" id="bg-solid"></div>
              <div class="bg-layer" id="bg-gradient"></div>
              <div class="bg-layer" id="bg-image" style="background-image: url('assets/images/content-images/background-customization/bg-image.webp')"></div>
              <div class="bg-layer" id="bg-theme"></div>
              <div class="bg-layer" id="bg-video">
                <video id="bg-video-el" muted loop playsinline src="assets/images/content-images/background-customization/compressed-background-video.mp4"></video>
              </div>
            </div>
            <img class="bg-catalogue-img" src="assets/images/content-images/background-customization/desktop-elements-all-grouped.webp" alt="Catalogue">
          </div>
          <img class="bg-text-img" src="assets/images/content-images/background-customization/fully-customizable-backgrounds-text.svg" alt="Fully Customizable Backgrounds">
        </div>
        
        <div class="bg-sidebar">
          <div class="bg-sidebar-item active" data-type="solid">
            <img src="assets/images/content-images/background-customization/solid-color.jpg" alt="Solid">
            <span>Solid</span>
          </div>
          <div class="bg-sidebar-item" data-type="gradient">
            <img src="assets/images/content-images/background-customization/gradient-color.webp" alt="Gradient">
            <span>Gradient</span>
          </div>
          <div class="bg-sidebar-item" data-type="image">
            <img src="assets/images/content-images/background-customization/bg-image.webp" alt="Image">
            <span>Image</span>
          </div>
          <div class="bg-sidebar-item" data-type="theme">
            <div class="theme-icon"></div>
            <span>Theme</span>
          </div>
          <div class="bg-sidebar-item" data-type="video">
            <div class="video-icon-wrapper">
              <video src="assets/images/content-images/background-customization/compressed-background-video.mp4" muted></video>
            </div>
            <span>Video</span>
          </div>
        </div>
      </div>
    `
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
    title: "Page Flip Effects & Viewing Experience",
    description: "Access powerful viewing tools including zoom controls, full screen mode, page navigation, quick page access, sharing options, downloads, and background audio controls for a smooth and interactive reading experience.",
    htmlContent: `
      <div class="flip-feature-wrapper">
        <img class="flip-cross-line" src="assets/images/content-images/page-flip-effects/cross-line.svg" alt="Divider">
        <div class="flip-effects-grid">
          <div class="flip-effects-item">
            <img src="assets/images/content-images/page-flip-effects/soft-flip.webp" alt="Soft Page Flip">
          </div>
          <div class="flip-effects-item">
            <img src="assets/images/content-images/page-flip-effects/hard-cover-flip.webp" alt="Hard Cover Flip">
          </div>
          <div class="flip-effects-item">
            <img src="assets/images/content-images/page-flip-effects/auto-page-flip.webp" alt="Auto Page Flip">
          </div>
          <div class="flip-effects-item">
            <img src="assets/images/content-images/page-flip-effects/drag-to-flip.webp" alt="Drag-to-Flip">
          </div>
        </div>
      </div>
    `
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
    title: "Analytics & Tracking",
    description: "Track user engagement and gain valuable insights into customer behavior and content performance.",
    htmlContent: `
      <div class="fisto-vw-wrapper" style="width: 100%; display: flex; justify-content: center; align-items: center;">
        <div id="analytics-svg-container" style="width: 100%; max-width: 881px;"></div>
      </div>
    `
  },
  'lead-gen': {
    title: "Lead Forms",
    description: "Capture leads effortlessly with interactive forms seamlessly integrated into your digital catalogue.",
    htmlContent: `
      <div class="fisto-vw-wrapper lead-gen-wrapper">
        <div class="lead-frame-container">
          <img class="custom-feature-img lead-bg-desktop" src="assets/images/content-images/lead-generation/desktop-frame.webp" alt="Desktop Frame">
          
          <img id="lead-enquiry-form" class="lead-form-anim lead-enquiry" src="assets/images/content-images/lead-generation/enquiry-form.webp" alt="Enquiry Form">
          <img id="lead-lead-form" class="lead-form-anim lead-lead" src="assets/images/content-images/lead-generation/lead-form.webp" alt="Lead Form">
          <img id="lead-contact-form" class="lead-form-anim lead-contact" src="assets/images/content-images/lead-generation/contact-form.webp" alt="Contact Form">
          <img id="lead-quiz-form" class="lead-form-anim lead-quiz" src="assets/images/content-images/lead-generation/quiz-form.webp" alt="Quiz Form">
        </div>
        
        <div class="lead-bottom-container">
          <img class="lead-bottom-lists" src="assets/images/content-images/lead-generation/bottom-lists.svg" alt="Features List">
        </div>
      </div>
    `
  },
  fingertips: {
    title: "Everything at Your Fingertips",
    description: "Access powerful viewing tools including zoom controls, full screen mode, page navigation, quick page access, sharing options, downloads, and background audio controls for a smooth and interactive reading experience.",
    image: `${imageBase}/everything-at-your-fingertips.webp`
  },
  'multi-view': {
    title: "Multi-View Product Experience",
    description: "Interactive explode views and detailed function demonstrations.",
    htmlContent: `
      <div class="fisto-vw-wrapper multi-view-wrapper">
        <div class="mv-top-bar">
          <div class="mv-title">
            <img src="assets/images/content-images/multi-view-product-experience/360-image.svg" alt="360 Icon">
            <span>3D Multi view Product Visualization</span>
          </div>
          <div class="mv-controls">
            <button class="mv-btn active" id="mv-normal-btn">Normal View</button>
            <button class="mv-btn" id="mv-explode-btn">Explode View</button>
          </div>
        </div>
        
        <div class="mv-main-area">
          <img class="mv-arrow left" src="assets/images/content-images/smart-navigation/black-arrow.svg" alt="Left">
          
          <div class="mv-video-container">
             <video id="mv-video" src="assets/images/content-images/multi-view-product-experience/normal-view-video.mp4" autoplay loop muted playsinline></video>
             
          </div>
          
          <img class="mv-arrow right" src="assets/images/content-images/smart-navigation/black-arrow.svg" alt="Right">
          
          <div class="mv-thumbnails">
            <div class="mv-thumb active"><div class="mv-thumb-img"></div><span>View 1</span></div>
            <div class="mv-thumb"><div class="mv-thumb-img"></div><span>View 2</span></div>
            <div class="mv-thumb"><div class="mv-thumb-img"></div><span>View 3</span></div>
            <div class="mv-thumb"><div class="mv-thumb-img"></div><span>View 4</span></div>
          </div>
        </div>
      </div>
    `
  },
  'product-selection': {
    title: "Product Selection & Interaction",
    description: "Seamless product selection, customization, and interaction.",
    htmlContent: `
      <div class="fisto-vw-wrapper product-selection-wrapper">
        <div class="ps-image-group">
          <img class="custom-feature-img ps-bg" src="assets/images/content-images/product-selection-and-interaction/catalogue-image.webp" alt="Catalogue Background">
          <img class="ps-title-text" src="assets/images/content-images/product-selection-and-interaction/easy-product-selection-text.svg" alt="Easy Product Selection">
          <img class="ps-red-arrow" src="assets/images/content-images/product-selection-and-interaction/red-arrow.svg" alt="Arrow">
        </div>
        
        <div class="ps-modal-overlay">
          <div class="ps-modal">
            <button class="ps-modal-close" id="ps-close-btn">&times;</button>
            <div class="ps-modal-top">
              <div class="ps-modal-left">
                <h3>ENTER DETAILS</h3>
                
                <div class="ps-form-group">
                  <label>Pipe Size (DN)</label>
                  <div class="ps-dropdown" id="ps-pipe-dropdown">
                    <input type="text" class="ps-dropdown-input" placeholder="Select Pipe Size" data-key="pipe">
                    <div class="ps-dropdown-list"></div>
                  </div>
                </div>

                <div class="ps-form-group">
                  <label>Flow Range (m³/h)</label>
                  <div class="ps-dropdown" id="ps-flow-dropdown">
                    <input type="text" class="ps-dropdown-input" placeholder="Select Flow Range" data-key="flow">
                    <div class="ps-dropdown-list"></div>
                  </div>
                </div>

                <div class="ps-form-group">
                  <label>Power Supply</label>
                  <div class="ps-dropdown" id="ps-power-dropdown">
                    <input type="text" class="ps-dropdown-input" placeholder="Select Power Supply" data-key="power">
                    <div class="ps-dropdown-list"></div>
                  </div>
                </div>

                <div class="ps-modal-actions">
                  <button class="ps-btn ps-btn-search" id="ps-btn-search">Search</button>
                  <button class="ps-btn ps-btn-reset" id="ps-btn-reset">Reset</button>
                </div>
                <div class="ps-error-msg" id="ps-error-msg">Product not found. Please try different options.</div>
              </div>
              
              <div class="ps-modal-right">
                <div class="ps-preview-placeholder" id="ps-preview-placeholder">
                  Search to view details
                </div>
                <div class="ps-preview-content" id="ps-preview-content">
                  <img src="assets/images/content-images/product-selection-and-interaction/popup-product-image.webp" alt="Product">
                  <h4 class="ps-product-model" id="ps-product-model"></h4>
                </div>
              </div>
            </div>
            
            <div class="ps-modal-bottom">
              <div class="ps-table-container">
                <table class="ps-spec-table" id="ps-spec-table">
                  <thead>
                    <tr>
                      <th>Model No</th>
                      <th>Pipe Size (DN)</th>
                      <th>Flow Range (m³/h)</th>
                      <th>Accuracy</th>
                      <th>Pressure Rating</th>
                      <th>Power Supply</th>
                      <th>Out Signal</th>
                      <th>Protection Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="td-model"></td>
                      <td id="td-pipe"></td>
                      <td id="td-flow"></td>
                      <td id="td-accuracy">±0.5% of rate</td>
                      <td id="td-pressure">PN16</td>
                      <td id="td-power"></td>
                      <td id="td-signal">Pulse + 4-20mA</td>
                      <td id="td-protection">IP65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'social-sharing': {
    title: "One-Tap Social Sharing",
    description: "Allow users to instantly share catalogue pages, products, and content across their favorite social media platforms with a single tap. Increase visibility, improve engagement, and help your content reach a wider audience effortlessly.",
    htmlContent: `
      <div class="fisto-vw-wrapper social-sharing-wrapper">
        <div class="ss-inner-container">
          <img class="custom-feature-img ss-bg" src="assets/images/content-images/one-tap-to-social/desktop-idc-image.webp" alt="Desktop Background">
          <img src="assets/images/content-images/one-tap-to-social/click-icon.svg" class="ss-click-icon" alt="Click Icon">
          <img src="assets/images/content-images/one-tap-to-social/share-icon.webp" class="ss-share-icon" alt="Click Icon">
          <img src="assets/images/content-images/one-tap-to-social/one-tap-to-share.svg" class="ss-one-tap-to-share-text" alt="Click Icon">
          
          <div class="ss-popup">
          <div class="ss-popup-header">
            <h3>Share Flipbook</h3>
            <button class="ss-close-btn">&times;</button>
          </div>
          
          <div class="ss-popup-body">
            <div class="ss-section">
              <label>Flipbook Link</label>
              <div class="ss-link-container">
                <div class="ss-link-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ss-link-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <input type="text" value="https://www.fist-o.com/Fistotech_IDC/" id="ss-link-input" readonly>
                </div>
                <button class="ss-copy-btn" id="ss-copy-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ss-copy-icon" id="ss-copy-svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span id="ss-copy-text">Copy</span>
                </button>
              </div>
            </div>
            
            <div class="ss-section ss-qr-section">
              <label>Share through QR code</label>
              <div class="ss-qr-container">
                <img src="assets/images/content-images/one-tap-to-social/qr-code.jpg" alt="QR Code" class="ss-qr-img">
                <a href="assets/images/content-images/one-tap-to-social/qr-code.jpg" download="flipbook-qr-code.jpg" class="ss-download-qr">Download QR Code</a>
              </div>
            </div>
            
            <div class="ss-section ss-social-section">
              <label>Share Through</label>
              <div id="ss-social-svg-container" class="ss-social-svg-container"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    `
  },

  'website-embed': {
    title: "Website Embed Integration",
    description: "Seamlessly integrate your digital catalog directly into your website.",
    image: `${imageBase}/interactive-media-experience.webp`
  },
  embed: {
    title: "Map Embed & Location Integration",
    description: "Provide interactive maps and location details right within your digital catalogue.",
    htmlContent: `
      <div class="fisto-vw-wrapper">
        <img class="custom-feature-img" src="assets/images/content-images/embedded-content-integration/flipbook-image.webp" alt="Embedded Content">
        <img id="embed-video-player" class="embed-content-anim-1" src="assets/images/content-images/embedded-content-integration/video-image.webp" alt="Video Player">
        <img id="embed-map-box" class="embed-map-static" src="assets/images/content-images/embedded-content-integration/map-image.webp" alt="Map Box">
        
        <img id="embed-fisto-text" class="embed-content-anim-2" src="assets/images/content-images/embedded-content-integration/fisto-tech-text.svg" alt="Fisto Tech Text">
        <img id="embed-location-icon" class="embed-content-anim-2" src="assets/images/content-images/embedded-content-integration/location-icon.svg" alt="Location Pin">
        
        <div id="embed-video-svg-container"></div>
        <div id="embed-map-svg-container"></div>
      </div>
    `
  },
  ar: {
    title: "AR Experience with QR Code",
    description: "Bring products into the real world with immersive AR experiences accessible through mobile devices.",
    htmlContent: `
      <div class="fisto-vw-wrapper">
        <img class="custom-feature-img" src="assets/images/content-images/ar-experience/background-lap-image.webp" alt="AR Experience Laptop">
        <img id="ar-hand-overlay" class="ar-hand-anim" src="assets/images/content-images/ar-experience/hand-ar-image.webp" alt="Hand holding phone">
      </div>
    `
  },
  '360-view': {
    title: "360° Product Visualization",
    description: "Provide an immersive 3D experience allowing customers to view products from every angle.",
    htmlContent: `
      <div class="fisto-vw-wrapper fisto-360-wrapper">
        <img class="custom-feature-img" src="assets/images/content-images/360-image/image-template.webp" alt="360 View Template">
        
        <div id="model-360-container">
          <model-viewer 
            src="assets/images/content-images/360-image/360-model.glb" 
            auto-rotate 
            rotation-per-second="30deg"
            camera-controls 
            shadow-intensity="1" 
            style="width: 100%; height: 100%; background-color: transparent; margin-left: -6%; margin-top: -2%;"
            interaction-prompt="none"
          ></model-viewer>
        </div>
        
        <div id="model-360-svg-container"></div>
      </div>
    `
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

let currentIndex = 0;
let rotateTimer = null;
const ROTATE_MS = 10000;

function setActiveFeature(featureKey) {
  const feature = featureData[featureKey];
  if (!feature) return;

  const isComingSoon = typeof comingSoonFeatures !== 'undefined' && comingSoonFeatures.includes(featureKey);
  const overlay = document.getElementById('coming-soon-overlay');
  if (overlay) {
    overlay.style.display = isComingSoon ? 'flex' : 'none';
  }

  const customHtmlContainer = document.getElementById('feature-custom-html');
  const previewText = document.querySelector('.preview-text');

  if (previewText) {
    previewText.classList.remove('fade-in');
    visualImage.classList.remove('slide-in');
    if (customHtmlContainer) customHtmlContainer.classList.remove('slide-in');
    void previewText.offsetWidth; // Trigger reflow
  }

  titleElement.textContent = feature.title;
  descriptionElement.textContent = feature.description;

  if (customHtmlContainer) {
    if (feature.htmlContent) {
      visualImage.style.display = 'none';
      customHtmlContainer.innerHTML = feature.htmlContent;
      customHtmlContainer.style.display = 'flex';

      if (featureKey === 'buttons') {
        setTimeout(() => {
          fetch('assets/images/content-images/interactive-buttons-hotspot/hotspot-button.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('<defs>', `<defs><mask id="hotspot-mask"><path d="M 211 195 L 211 22 L 121 22" fill="none" stroke="white" stroke-width="30" stroke-dasharray="300" stroke-dashoffset="300" class="fisto-anim-draw-1" /></mask>`);
              svg = svg.replace('<g filter="url(#filter0', '<g mask="url(#hotspot-mask)" filter="url(#filter0');
              svg = svg.replace('<g filter="url(#filter1', '<g class="fisto-popup-btn-1" style="transform-origin: 50px 22px;" filter="url(#filter1');
              const container = document.getElementById('interactive-hotspot-svg-container');
              if (container) container.innerHTML = svg;
            });

          fetch('assets/images/content-images/interactive-buttons-hotspot/interactive-button.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('<defs>', `<defs><mask id="interactive-mask"><path d="M 100 0 L 100 61" fill="none" stroke="white" stroke-width="30" stroke-dasharray="100" stroke-dashoffset="100" class="fisto-anim-draw-2" /></mask>`);
              svg = svg.replace('<g filter="url(#filter0', '<g mask="url(#interactive-mask)" filter="url(#filter0');
              svg = svg.replace('<g filter="url(#filter1', '<g class="fisto-popup-btn-2" style="transform-origin: 90px 96px;" filter="url(#filter1');
              const container = document.getElementById('interactive-button-svg-container');
              if (container) container.innerHTML = svg;
            });
        }, 50);
      }

      if (featureKey === 'multi-view') {
        setTimeout(() => {
          const normalBtn = document.getElementById('mv-normal-btn');
          const explodeBtn = document.getElementById('mv-explode-btn');
          const video = document.getElementById('mv-video');

          if(normalBtn && explodeBtn && video) {
            normalBtn.addEventListener('click', () => {
              normalBtn.classList.add('active');
              explodeBtn.classList.remove('active');
              video.src = 'assets/images/content-images/multi-view-product-experience/normal-view-video.mp4';
              video.play().catch(()=>{});
            });

            explodeBtn.addEventListener('click', () => {
              explodeBtn.classList.add('active');
              normalBtn.classList.remove('active');
              video.src = 'assets/images/content-images/multi-view-product-experience/exploded-view-video.mp4';
              video.play().catch(()=>{});
            });
          }
        }, 50);
      }

      if (featureKey === 'media') {
        setTimeout(() => {
          fetch('assets/images/content-images/images-videos-and-gifs/buttons-and-arrows.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('<svg ', '<svg style="width: 100%; height: auto;" ');
              
              // Apply arrow animations
              svg = svg.replace('<g filter="url(#filter0', '<g class="media-arrow media-arrow-1" filter="url(#filter0');
              svg = svg.replace('<g filter="url(#filter1', '<g class="media-arrow media-arrow-2" filter="url(#filter1');
              svg = svg.replace('<g filter="url(#filter4', '<g class="media-arrow media-arrow-3" filter="url(#filter4');
              svg = svg.replace('<g filter="url(#filter5', '<g class="media-arrow media-arrow-4" filter="url(#filter5');
              svg = svg.replace('<g filter="url(#filter6', '<g class="media-arrow media-arrow-5" filter="url(#filter6');
              
              // Apply label animations
              svg = svg.replace('<g filter="url(#filter2', '<g class="media-label media-label-1" filter="url(#filter2');
              svg = svg.replace('<g filter="url(#filter3', '<g class="media-label media-label-2" filter="url(#filter3');
              svg = svg.replace('<g filter="url(#filter7', '<g class="media-label media-label-3" filter="url(#filter7');
              svg = svg.replace('<g filter="url(#filter8', '<g class="media-label media-label-4" filter="url(#filter8');
              svg = svg.replace('<g filter="url(#filter9', '<g class="media-label media-label-5" filter="url(#filter9');

              const container = document.getElementById('media-svg-container');
              if (container) container.innerHTML = svg;
            });
        }, 50);
      }

      if (featureKey === 'embed') {
        setTimeout(() => {
          fetch('assets/images/content-images/embedded-content-integration/video-embed.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('width="215" height="297"', 'style="width: 100%; height: auto;"');
              svg = svg.replace('<svg ', '<svg style="width: 100%; height: 100%;" '); // keeping this just in case, but the above line fixes it better
              svg = svg.replace('<g filter="url(#filter0', '<g class="fisto-popup-btn-1" style="transform-origin: center bottom;" filter="url(#filter0');
              svg = svg.replace('<g filter="url(#filter1', '<g class="fisto-clip-reveal-up-right" filter="url(#filter1');
              const container = document.getElementById('embed-video-svg-container');
              if (container) container.innerHTML = svg;
            });

          fetch('assets/images/content-images/embedded-content-integration/google-map-embed.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('width="264" height="305"', 'style="width: 100%; height: auto;"');
              svg = svg.replace('<svg ', '<svg style="width: 100%; height: 100%;" ');
              svg = svg.replace('<g filter="url(#filter0', '<g class="fisto-popup-btn-2" style="transform-origin: center bottom;" filter="url(#filter0');
              svg = svg.replace('<g filter="url(#filter1', '<g class="fisto-clip-reveal-up-left" filter="url(#filter1');
              const container = document.getElementById('embed-map-svg-container');
              if (container) container.innerHTML = svg;
            });
        }, 50);
      }

      if (featureKey === 'product-selection') {
        setTimeout(() => {
          setupProductSelectionModal();
        }, 50);
      }

      if (featureKey === '360-view') {
        setTimeout(() => {
          fetch('assets/images/content-images/360-image/click-and-arrow-text.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('<svg ', '<svg style="width: 100%; height: auto;" ');

              // The red arrow path starts with M2.10433
              svg = svg.replace('<path d="M2.10433', '<path class="fisto-clip-reveal-up-left" d="M2.10433');

              // The black text starts with M323.124. We wrap it and everything after it in a popup group
              svg = svg.replace('<path d="M323.124', '<g class="fisto-popup-btn-1" style="transform-origin: right bottom;"><path d="M323.124');
              svg = svg.replace('</svg>', '</g></svg>');

              const container = document.getElementById('model-360-svg-container');
              if (container) container.innerHTML = svg;
            });
        }, 50);
      }

      if (featureKey === 'analytics') {
        setTimeout(() => {
          fetch('assets/images/content-images/analysis-and-tracking/full-image.svg')
            .then(r => r.text())
            .then(svg => {
              svg = svg.replace('<svg ', '<svg class="analytics-svg" style="width: 100%; height: auto; max-height: 56.5vh;" ');
              
              // Apply scale animations to inner chart elements
              // Center Pie 1
              svg = svg.replace(/(<path d="M462\.198 183\.036[\s\S]*?<path d="M495\.198 166\.361[\s\S]*?\/>)/, '<g class="analytics-scale-item" style="animation-delay: 0.4s;">$1</g>');
              // Center Pie 2
              svg = svg.replace(/(<path d="M491\.107 248\.242[\s\S]*?<path d="M476\.386 273\.002[\s\S]*?\/>)/, '<g class="analytics-scale-item" style="animation-delay: 0.5s;">$1</g>');
              // Center Bar Chart
              svg = svg.replace(/(<path d="M367\.929 214\.748[\s\S]*?<path d="M433\.917 154\.426[\s\S]*?\/>)/, '<g class="analytics-scale-up" style="animation-delay: 0.6s;">$1</g>');
              // Center Line Chart
              svg = svg.replace(/(<path d="M318\.104 209\.688[\s\S]*?<path d="M390\.723 150\.685[\s\S]*?\/>)/, '<g class="analytics-scale-item" style="animation-delay: 0.7s;">$1</g>');
              // Top-Left Pie Chart
              svg = svg.replace(/(<path d="M205\.368 101\.715[\s\S]*?<path d="M180\.002 75\.9387[\s\S]*?\/>)/, '<g class="analytics-scale-item" style="animation-delay: 0.8s;">$1</g>');
              // Bottom-Left Line Chart
              svg = svg.replace(/(<path d="M168\.45 240\.513[\s\S]*?<path d="M219\.785 208\.943[\s\S]*?\/>)/, '<g class="analytics-scale-item" style="animation-delay: 0.9s;">$1</g>');
              
              // The Man
              svg = svg.replace(/(<path d="M115\.267 275\.225[\s\S]*?<path d="M101\.361 231\.907[\s\S]*?\/>)/, '<g class="analytics-man">$1</g>');

              const container = document.getElementById('analytics-svg-container');
              if (container) {
                container.innerHTML = svg;
                const svgEl = container.querySelector('svg');
                if (svgEl) {
                  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                  style.textContent = `
                    @keyframes analyticsPopIn {
                      0%, 5%, 95%, 100% { opacity: 0; transform: translateX(30px) scale(0.9); }
                      15%, 85% { opacity: 1; transform: translateX(0) scale(1); }
                    }
                    @keyframes manFadeIn {
                      0% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                    @keyframes manFloat {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-6px); }
                    }
                    @keyframes analyticsChartGrow {
                      0%, 5%, 95%, 100% { opacity: 0; transform: scale(0); }
                      15%, 85% { opacity: 1; transform: scale(1); }
                    }
                    @keyframes analyticsBarGrow {
                      0%, 5%, 95%, 100% { opacity: 0; transform: scaleY(0); }
                      15%, 85% { opacity: 1; transform: scaleY(1); }
                    }
                    .analytics-item {
                      opacity: 0;
                      animation: analyticsPopIn 10s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                      transform-origin: center right;
                    }
                    .analytics-scale-item {
                      opacity: 0;
                      transform-box: fill-box;
                      transform-origin: 50% 50%;
                      animation: analyticsChartGrow 10s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                    }
                    .analytics-scale-up {
                      opacity: 0;
                      transform-box: fill-box;
                      transform-origin: 50% 100%;
                      animation: analyticsBarGrow 10s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                    }
                    .analytics-man {
                      opacity: 0;
                      transform-origin: bottom center;
                      animation: manFadeIn 1.5s ease-out forwards, manFloat 5s ease-in-out infinite;
                    }
                  `;
                  svgEl.appendChild(style);

                  const children = Array.from(svgEl.children);
                  const insertBeforeNode = children[20];

                  // Wrap 5 right side items
                  for (let i = 0; i < 5; i++) {
                    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    g.classList.add('analytics-item');
                    g.style.animationDelay = `${i * 0.15 + 0.3}s`;

                    for (let j = 0; j < 4; j++) {
                      if (children[i * 4 + j]) {
                        g.appendChild(children[i * 4 + j]);
                      }
                    }
                    if (insertBeforeNode) {
                      svgEl.insertBefore(g, insertBeforeNode);
                    } else {
                      svgEl.appendChild(g);
                    }
                  }

                  }
                }
              
            });
        }, 50);
      }

      if (featureKey === 'social-sharing') {
        setTimeout(() => {
          const copyBtn = document.getElementById('ss-copy-btn');
          const linkInput = document.getElementById('ss-link-input');
          const copyText = document.getElementById('ss-copy-text');
          const copySvg = document.getElementById('ss-copy-svg');
          if (copyBtn && linkInput && copyText && copySvg) {
            copyBtn.addEventListener('click', () => {
              linkInput.select();
              document.execCommand('copy');
              copyText.textContent = 'Copied!';
              copySvg.style.display = 'none';
              setTimeout(() => {
                copyText.textContent = 'Copy';
                copySvg.style.display = 'block';
              }, 2000);
            });
          }
          
          fetch('assets/images/content-images/one-tap-to-social/social-media.svg')
            .then(r => r.text())
            .then(svg => {
              // Wrap each icon in an animated group
              svg = svg.replace(/(<path d="M0 10\.5406[\s\S]*?clip0_2702_65"\)>\n[\s\S]*?<\/g>)/, '<g class="ss-social-icon" style="animation-delay: 0.8s">$1</g>');
              svg = svg.replace(/(<path d="M73\.2891 10\.5406[\s\S]*?clip1_2702_65"\)>\n[\s\S]*?<\/g>)/, '<g class="ss-social-icon" style="animation-delay: 0.9s">$1</g>');
              svg = svg.replace(/(<path d="M157\.072 0\.484375[\s\S]*?clip2_2702_65"\)>\n[\s\S]*?<\/g>)/, '<g class="ss-social-icon" style="animation-delay: 1.0s">$1</g>');
              svg = svg.replace(/(<path d="M219\.867 10\.5406[\s\S]*?clip3_2702_65"\)>\n[\s\S]*?<\/g>)/, '<g class="ss-social-icon" style="animation-delay: 1.1s">$1</g>');
              svg = svg.replace(/(<g clip-path="url\(#clip4_2702_65"\)>[\s\S]*?<\/g>)/, '<g class="ss-social-icon" style="animation-delay: 1.2s">$1</g>');

              const container = document.getElementById('ss-social-svg-container');
              if (container) container.innerHTML = svg;
            });
        }, 50);
      }

      if (featureKey === 'discovery') {
        setTimeout(() => {
          const searchInput = document.getElementById('sf-search-input');
          const resultsList = document.getElementById('sf-results-list');
          
          const database = [
            { text: "Showcases into in...", count: "03" },
            { text: "Shopping links th...", count: "03" },
            { text: "Shoe that perfor...", count: "03" },
            { text: "Shorts and pants...", count: "02" },
            { text: "Shirts for men...", count: "05" },
            { text: "Water bottles...", count: "01" },
            { text: "Oil bottles...", count: "02" },
            { text: "Product shoes...", count: "04" },
            { text: "Plastic bottles...", count: "03" }
          ];

          const renderResults = (query) => {
            if (!resultsList) return;
            resultsList.innerHTML = '';
            
            const q = query ? query.trim().toLowerCase() : '';
            if (q === '') {
              // Hide suggestions if empty
              return;
            }

            const filtered = database.filter(item => item.text.toLowerCase().includes(q)).slice(0, 3);
            
            if (filtered.length === 0) {
              resultsList.innerHTML = '<li class="sf-result-item"><span class="sf-result-text">No results found</span></li>';
              return;
            }

            filtered.forEach(item => {
              const li = document.createElement('li');
              li.className = 'sf-result-item';
              
              let highlightedText = item.text;
              if (q) {
                const regex = new RegExp(`(${q})`, 'gi');
                highlightedText = item.text.replace(regex, '<strong>$1</strong>');
              }
              
              li.innerHTML = `
                <span class="sf-result-text">${highlightedText}</span>
                <span class="sf-result-count">${item.count}</span>
              `;
              resultsList.appendChild(li);
            });
          };

          if (searchInput) {
            renderResults(searchInput.value);
            searchInput.addEventListener('input', (e) => {
              renderResults(e.target.value);
            });
          }
        }, 50);
      }

      if (featureKey === 'background') {
        setTimeout(() => {
          const sidebarItems = document.querySelectorAll('.bg-sidebar-item');
          const layers = document.querySelectorAll('.bg-layer');
          const videoEl = document.getElementById('bg-video-el');
          const themeLayer = document.getElementById('bg-theme');

          const catalogueWrapper = document.querySelector('.bg-catalogue-wrapper');

          if (catalogueWrapper && themeLayer) {
            catalogueWrapper.addEventListener('mousemove', (e) => {
              if(!themeLayer.classList.contains('active')) return;
              const bubble = document.createElement('div');
              bubble.className = 'bg-theme-bubble';
              const rect = catalogueWrapper.getBoundingClientRect();
              bubble.style.left = (e.clientX - rect.left) + 'px';
              bubble.style.top = (e.clientY - rect.top) + 'px';
              themeLayer.appendChild(bubble);
              setTimeout(() => { bubble.remove(); }, 1000);
            });
          }

          if (window.bgAutoTimer) clearInterval(window.bgAutoTimer);

          const startBgAuto = () => {
             if (window.bgAutoTimer) clearInterval(window.bgAutoTimer);
             window.bgAutoTimer = setInterval(() => {
                const items = document.querySelectorAll('.bg-sidebar-item');
                if(!items.length) {
                   clearInterval(window.bgAutoTimer);
                   return;
                }
                const active = document.querySelector('.bg-sidebar-item.active');
                let next = active ? active.nextElementSibling : items[0];
                if(!next || !next.classList.contains('bg-sidebar-item')) next = items[0];
                next.click();
             }, 6000);
          };

          sidebarItems.forEach(item => {
            item.addEventListener('click', (e) => {
              sidebarItems.forEach(i => i.classList.remove('active'));
              item.classList.add('active');

              const type = item.dataset.type;
              layers.forEach(l => l.classList.remove('active'));
              
              const activeLayer = document.getElementById('bg-' + type);
              if (activeLayer) {
                activeLayer.classList.add('active');
              }

              if (type === 'video' && videoEl) {
                videoEl.play().catch(()=>{});
              } else if (videoEl) {
                videoEl.pause();
              }
              
              if(e && e.isTrusted) {
                  // Only reset timer if click is manual
                  startBgAuto();
              }
            });
          });
          
          const first = document.querySelector('.bg-sidebar-item.active');
          if(first) first.click();
          startBgAuto();
        }, 50);
      }
    } else {
      customHtmlContainer.style.display = 'none';
      customHtmlContainer.innerHTML = '';
      visualImage.style.display = 'block';

      visualImage.src = feature.image;
      visualImage.alt = `${feature.title} preview`;

      if (isComingSoon) {
        visualImage.style.filter = "blur(6px) brightness(0.5)";
      } else {
        visualImage.style.filter = "none";
      }
    }
  }

  if (previewText) {
    previewText.classList.add('fade-in');
    visualImage.classList.add('slide-in');
    if (customHtmlContainer) customHtmlContainer.classList.add('slide-in');
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

const autoplayToggle = document.getElementById('autoplay-toggle');

function startAutoRotate() {
  stopAutoRotate();
  if (autoplayToggle && !autoplayToggle.checked) return;
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
  fingertips: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/><rect x="10" y="9" width="12" height="11" rx="2"/><path d="M14 14h4"/></svg>`,
  'multi-view': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  'product-selection': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  'social-sharing': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  background: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  'website-embed': `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="16 10 20 10 20 14"/><polyline points="4 14 4 10 8 10"/></svg>`
};

const comingSoonFeatures = ['website-embed'];

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

  if (autoplayToggle) {
    autoplayToggle.addEventListener('change', () => {
      if (autoplayToggle.checked) {
        startAutoRotate();
      } else {
        stopAutoRotate();
      }
    });
  }
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

// ─── Product Selection Feature Logic ─────
const productDummyData = [
  { model: "FM-050", pipe: "DN50", flow: "1 - 80", power: "24V DC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-065", pipe: "DN65", flow: "2 - 120", power: "24V DC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-080", pipe: "DN80", flow: "5 - 200", power: "24V DC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-100", pipe: "DN100", flow: "10 - 300", power: "24V DC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-125", pipe: "DN125", flow: "15 - 500", power: "220V AC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-150", pipe: "DN150", flow: "20 - 800", power: "220V AC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-200", pipe: "DN200", flow: "30 - 1200", power: "220V AC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-250", pipe: "DN250", flow: "50 - 2000", power: "220V AC", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse + 4-20mA", protection: "IP65" },
  { model: "FM-300", pipe: "DN300", flow: "80 - 3000", power: "Battery", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse", protection: "IP65" },
  { model: "FM-350", pipe: "DN350", flow: "100 - 4000", power: "Battery", accuracy: "±0.5% of rate", pressure: "PN16", signal: "Pulse", protection: "IP65" },
];

window.setupProductSelectionModal = function() {
  const modalWrapper = document.querySelector('.product-selection-wrapper');
  if (!modalWrapper) return;

  const inputs = {
    pipe: document.querySelector('#ps-pipe-dropdown input'),
    flow: document.querySelector('#ps-flow-dropdown input'),
    power: document.querySelector('#ps-power-dropdown input')
  };

  const lists = {
    pipe: document.querySelector('#ps-pipe-dropdown .ps-dropdown-list'),
    flow: document.querySelector('#ps-flow-dropdown .ps-dropdown-list'),
    power: document.querySelector('#ps-power-dropdown .ps-dropdown-list')
  };

  const btnSearch = document.getElementById('ps-btn-search');
  const btnReset = document.getElementById('ps-btn-reset');
  const btnClose = document.getElementById('ps-close-btn');
  const errorMsg = document.getElementById('ps-error-msg');
  const previewPlaceholder = document.getElementById('ps-preview-placeholder');
  const previewContent = document.getElementById('ps-preview-content');
  const productModelText = document.getElementById('ps-product-model');
  const specTableContainer = document.querySelector('.ps-table-container');

  let currentSelections = { pipe: '', flow: '', power: '' };

  function getFilteredOptions(key) {
    return [...new Set(productDummyData.filter(item => {
      let match = true;
      Object.keys(currentSelections).forEach(k => {
        if (k !== key && currentSelections[k] && item[k] !== currentSelections[k]) {
          match = false;
        }
      });
      return match;
    }).map(item => item[key]))];
  }

  function renderList(key, filterText = '') {
    const listEl = lists[key];
    listEl.innerHTML = '';
    const options = getFilteredOptions(key);
    const filteredOptions = options.filter(opt => opt.toLowerCase().includes(filterText.toLowerCase()));
    
    if (filteredOptions.length === 0) {
      const div = document.createElement('div');
      div.className = 'ps-dropdown-item disabled';
      div.textContent = 'No options available';
      listEl.appendChild(div);
    } else {
      filteredOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'ps-dropdown-item';
        div.textContent = opt;
        div.addEventListener('click', () => {
          inputs[key].value = opt;
          currentSelections[key] = opt;
          listEl.classList.remove('show');
        });
        listEl.appendChild(div);
      });
    }
  }

  Object.keys(inputs).forEach(key => {
    const input = inputs[key];
    const list = lists[key];

    input.addEventListener('focus', () => {
      Object.values(lists).forEach(l => { if(l !== list) l.classList.remove('show') });
      renderList(key, input.value);
      list.classList.add('show');
    });

    input.addEventListener('input', (e) => {
      currentSelections[key] = ''; 
      renderList(key, e.target.value);
      list.classList.add('show');
    });

    input.addEventListener('keydown', (e) => {
      const items = Array.from(list.querySelectorAll('.ps-dropdown-item:not(.disabled)'));
      if (items.length === 0) return;
      let activeIdx = items.findIndex(item => item.classList.contains('active'));

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
        items.forEach(i => i.classList.remove('active'));
        items[activeIdx].classList.add('active');
        items[activeIdx].scrollIntoView({block: 'nearest'});
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = activeIdx <= 0 ? items.length - 1 : activeIdx - 1;
        items.forEach(i => i.classList.remove('active'));
        items[activeIdx].classList.add('active');
        items[activeIdx].scrollIntoView({block: 'nearest'});
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIdx > -1) {
          items[activeIdx].click();
        } else if (items.length === 1) {
          items[0].click();
        }
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.ps-dropdown')) {
      Object.values(lists).forEach(l => l.classList.remove('show'));
    }
  });

  btnSearch.addEventListener('click', () => {
    errorMsg.style.display = 'none';
    const pipe = inputs.pipe.value;
    const flow = inputs.flow.value;
    const power = inputs.power.value;

    const matchedProduct = productDummyData.find(p => p.pipe === pipe && p.flow === flow && p.power === power);

    if (matchedProduct) {
      previewPlaceholder.style.display = 'none';
      previewContent.style.display = 'flex';
      productModelText.textContent = matchedProduct.model;

      document.getElementById('td-model').textContent = matchedProduct.model;
      document.getElementById('td-pipe').textContent = matchedProduct.pipe;
      document.getElementById('td-flow').textContent = matchedProduct.flow;
      document.getElementById('td-power').textContent = matchedProduct.power;
      document.getElementById('td-accuracy').textContent = matchedProduct.accuracy;
      document.getElementById('td-pressure').textContent = matchedProduct.pressure;
      document.getElementById('td-signal').textContent = matchedProduct.signal;
      document.getElementById('td-protection').textContent = matchedProduct.protection;

      specTableContainer.classList.add('show');
    } else {
      errorMsg.style.display = 'block';
    }
  });

  btnReset.addEventListener('click', () => {
    Object.values(inputs).forEach(input => input.value = '');
    currentSelections = { pipe: '', flow: '', power: '' };
    errorMsg.style.display = 'none';
    previewPlaceholder.style.display = 'flex';
    previewContent.style.display = 'none';
    specTableContainer.classList.remove('show');
  });

  if (btnClose) {
    btnClose.addEventListener('click', () => {
       btnReset.click();
    });
  }
};