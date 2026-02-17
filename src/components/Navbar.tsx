import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const navItems = [
  { label: 'Home', href: '/', type: 'link' },
  { label: 'About', href: '/#about', type: 'scroll' },
  { label: 'Projects', href: '/#projects', type: 'scroll' },
  { label: 'Skills', href: '/#skills', type: 'scroll' },
  { label: 'Certifications', href: '/#certifications', type: 'scroll' },
  { label: 'Contact', href: '/#contact', type: 'scroll' },
  { label: 'Freelancing', href: '/freelancing', type: 'link' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = navItems
          .filter(item => item.type === 'scroll')
          .map(item => item.href.replace('/#', ''));

        for (const id of [...sections].reverse()) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 150) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

  // Handle setting active state based on route
  useEffect(() => {
    if (!isHomePage) {
      if (location.pathname === '/freelancing') {
        setActive('freelancing');
      } else {
        setActive('');
      }
    } else {
      // Logic for home page initial active state if needed
      // but scroll listener usually takes over
    }
  }, [location.pathname, isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setMobileOpen(false);

    if (item.type === 'link') {
      navigate(item.href);
      return;
    }

    // Scroll link logic
    if (isHomePage) {
      const id = item.href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActive(id);
      }
    } else {
      // Navigate to home and then scroll
      // This is a bit tricky with React Router, but standard anchor behavior usually works 
      // if we navigate to /#id. 
      // Let's force navigation to / then scroll
      navigate(item.href);
      // We might need a delay or effect on Home to scroll to hash, 
      // but native browser behavior often handles /#id correctly on load.
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-background/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">
          PS<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              (isHomePage && item.type === 'scroll' && active === item.href.replace('/#', '')) ||
              (!isHomePage && item.type === 'link' && location.pathname === item.href) ||
              (isHomePage && item.type === 'link' && item.href === '/' && active === 'hero'); // Special case for Home link

            const isFreelancing = item.label === 'Freelancing';

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={isFreelancing
                  ? "block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/50 text-white font-medium hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : `relative text-sm font-medium transition-colors duration-300 neon-underline ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.label}
              </a>
            );
          })}


        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-primary transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-primary transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-primary transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => {
                const isFreelancing = item.label === 'Freelancing';
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={isFreelancing
                      ? "text-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/50 text-white font-medium hover:bg-primary/20 transition-all mt-2"
                      : "text-sm text-muted-foreground hover:text-primary transition-colors block py-2"
                    }
                  >
                    {item.label}
                  </a>
                );
              })}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
