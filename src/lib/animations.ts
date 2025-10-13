// Centralized animation configuration for consistent timing and easing
export const animationConfig = {
  // Timing configurations - optimized for performance
  durations: {
    fast: 0.2,
    medium: 0.3,
    slow: 0.4,
    slower: 0.5,
    slowest: 0.6
  },
  
  // Viewport configurations
  viewport: {
    once: true,
    margin: "-100px"
    // Increased margin to trigger animations earlier for better perceived performance
  },
  
  // Stagger configurations - reduced for better performance
  stagger: {
    fast: 0.03,
    medium: 0.06,
    slow: 0.1
  },
  
  // Performance optimizations
  performance: {
    // Reduced animation counts for mobile devices
    mobile: {
      maxAnimations: 10,
      reducedStagger: 0.15
    },
    // Limited animations for desktop
    desktop: {
      maxAnimations: 30,
      reducedStagger: 0.08
    }
  }
};

// Predefined animation variants - optimized for performance
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -20
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -20
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 20
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    scale: 1
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

// Hover animation variants - simplified for better performance
export const hoverScale = {
  rest: { 
    scale: 1
  },
  hover: { 
    scale: 1.03
  }
};

export const tapScale = {
  rest: { 
    scale: 1
  },
  tap: { 
    scale: 0.98
  }
};