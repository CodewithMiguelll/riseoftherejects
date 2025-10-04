"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

{/*
    This component initializes AOS (Animate On Scroll) library.
    It should be included once in the application, typically at a high level (e.g., in the main layout or App component).
    The useEffect hook ensures that AOS is initialized only once when the component mounts.

    To set it up, install the aos package with your package installer
    Copy the init code from the GitHub repo and paste in your init.js file (like this one)
    Import it in your app's layout file or main component file
    Add the component <AOSInit /> to your layout or main component file
    Now you can use AOS attributes in your components to animate elements on scroll
    C'est finit!
     */}

const AOSInit = () => {
    console.log("AOS Initialized");
  useEffect(() => {
    AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return null; // This component doesn't render any visible elements
};

export default AOSInit;
