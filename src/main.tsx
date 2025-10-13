import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { detectDeviceCapabilities } from './lib/performance';

const initializeApp = () => {
  // Detect device capabilities and apply optimizations
  const capabilities = detectDeviceCapabilities();
  
  // Apply performance optimizations based on device
  if (capabilities.prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
  }
  
  if (capabilities.isMobile) {
    document.documentElement.classList.add('mobile-device');
  }
};

// Initialize app optimizations
initializeApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
