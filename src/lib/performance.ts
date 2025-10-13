// Performance optimization utilities for animations
import { domMax } from 'framer-motion';

// Lazy load heavy animation features only when needed
export const loadAnimationFeatures = async () => {
  // In a real app, you might conditionally load features based on device capabilities
  // For now, we'll just export the domMax which includes all features
  return domMax;
};

// Animation performance settings
export const performanceSettings = {
  // Reduce motion for users who prefer it
  respectReducedMotion: true,
  
  // Optimize animations for different devices
  deviceOptimizations: {
    mobile: {
      reducedMotion: true,
      simplifiedAnimations: true,
      lowerFramerate: true,
      maxAnimations: 10
    },
    tablet: {
      reducedMotion: false,
      simplifiedAnimations: false,
      lowerFramerate: false,
      maxAnimations: 20
    },
    desktop: {
      reducedMotion: false,
      simplifiedAnimations: false,
      lowerFramerate: false,
      maxAnimations: 30
    }
  },
  
  // Animation quality settings - optimized for performance
  quality: {
    high: {
      springStiffness: 200, // Reduced stiffness for better performance
      springDamping: 25,
      duration: 0.3
    },
    medium: {
      springStiffness: 150,
      springDamping: 20,
      duration: 0.4
    },
    low: {
      springStiffness: 100,
      springDamping: 15,
      duration: 0.5
    }
  }
};

// Utility to detect device capabilities
export const detectDeviceCapabilities = () => {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const isDesktop = window.innerWidth > 1024;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Simple performance test - optimized to be less intensive
  const performanceTest = () => {
    // Use a lighter performance test
    const start = performance.now();
    // Reduced iteration count for faster execution
    let counter = 0;
    for (let i = 0; i < 100000; i++) {
      counter += i;
    }
    const end = performance.now();
    return end - start;
  };
  
  const performanceScore = performanceTest();
  // Adjusted threshold for better performance detection
  const isHighPerformance = performanceScore < 5;
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    prefersReducedMotion,
    isHighPerformance
  };
};

// Optimized animation props based on device
export const getOptimizedAnimationProps = () => {
  const capabilities = detectDeviceCapabilities();
  
  if (capabilities.prefersReducedMotion) {
    return {
      transition: { duration: 0 },
      animate: false
    };
  }
  
  if (capabilities.isMobile) {
    return {
      transition: {
        type: "tween",
        duration: performanceSettings.quality.low.duration,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing for smoother animation
      }
    };
  }
  
  if (!capabilities.isHighPerformance) {
    return {
      transition: {
        type: "tween",
        duration: performanceSettings.quality.medium.duration,
        ease: [0.25, 0.1, 0.25, 1]
      }
    };
  }
  
  return {
    transition: {
      type: "spring",
      stiffness: performanceSettings.quality.high.springStiffness,
      damping: performanceSettings.quality.high.springDamping
    }
  };
};

// Animation optimization utility
export const optimizeAnimationsForDevice = (animationsCount: number) => {
  const capabilities = detectDeviceCapabilities();
  
  if (capabilities.isMobile && animationsCount > performanceSettings.deviceOptimizations.mobile.maxAnimations) {
    return performanceSettings.deviceOptimizations.mobile.maxAnimations;
  }
  
  if (capabilities.isTablet && animationsCount > performanceSettings.deviceOptimizations.tablet.maxAnimations) {
    return performanceSettings.deviceOptimizations.tablet.maxAnimations;
  }
  
  if (capabilities.isDesktop && animationsCount > performanceSettings.deviceOptimizations.desktop.maxAnimations) {
    return performanceSettings.deviceOptimizations.desktop.maxAnimations;
  }
  
  return animationsCount;
};