import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  PhoneIcon,
  X,
  ChevronDown,
  Scale,
  Shield,
  Home as HomeIcon,
  Users,
  ShoppingCart,
  FileText,
} from "lucide-react";
import logo from "/balagali-associates.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    name: "Civil Litigation",
    icon: Scale,
    description: "Comprehensive civil dispute resolution",
  },
  {
    name: "Criminal Law",
    icon: Shield,
    description: "Expert criminal defense representation",
  },
  {
    name: "Constitutional & Writ Jurisdiction",
    icon: FileText,
    description: "Constitutional matters & writ petitions",
  },
  {
    name: "Family & Matrimonial Law",
    icon: Users,
    description: "Family disputes & matrimonial cases",
  },
  {
    name: "Consumer Protection Law",
    icon: ShoppingCart,
    description: "Consumer rights & protection",
  },
  {
    name: "Property & Real Estate Law",
    icon: HomeIcon,
    description: "Property transactions & disputes",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Helper function to handle navigation
  const handleNavClick = (e, href) => {
    // Close menus
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    
    // Allow default anchor navigation
    // The browser will handle scrolling to the target
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo - Responsive sizing */}
          <a href="#home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Balagali Associates logo"
              className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <a
              href="#home"
              className="text-foreground/80 hover:text-gold transition text-xs xl:text-sm font-medium whitespace-nowrap"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-foreground/80 hover:text-gold transition text-xs xl:text-sm font-medium whitespace-nowrap"
            >
              About
            </a>

            {/* Enhanced Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-foreground/80 hover:text-gold transition text-xs xl:text-sm font-medium py-2 whitespace-nowrap">
                Services
                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180 duration-300" />
              </div>

              {/* Dropdown Menu - Responsive width */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] sm:w-[480px] lg:w-[500px] xl:w-[540px] max-w-[95vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-zinc-900 rotate-45 border-l border-t border-border"></div>

                {/* Dropdown content */}
                <div className="relative bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-2xl overflow-hidden mt-2">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-b border-border px-4 sm:px-6 py-3 sm:py-4">
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                      Our Legal Services
                    </h3>
                    <p className="text-[10px] sm:text-xs text-foreground/60 mt-1">
                      Expert legal solutions tailored to your needs
                    </p>
                  </div>

                  {/* Services Grid - Responsive columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-2">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.a
                          key={service.name}
                          href="#services"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group/item relative p-3 sm:p-4 rounded-lg hover:bg-gold/5 transition-all duration-300 border border-transparent hover:border-gold/20 hover:shadow-md"
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover/item:bg-gold/20 transition-colors">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brown" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs sm:text-sm font-semibold text-foreground group-hover/item:text-brown transition-colors leading-tight">
                                {service.name}
                              </h4>
                              <p className="text-[10px] sm:text-xs text-white mt-0.5 sm:mt-1 leading-snug line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Hover indicator */}
                          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover/item:w-full transition-all duration-300"></div>
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="border-t border-border bg-gradient-to-r from-gold/5 to-transparent px-4 sm:px-6 py-2.5 sm:py-3">
                    <a
                      href="#contact"
                      className="text-[10px] sm:text-xs font-medium text-gold hover:text-gold/80 transition-colors flex items-center gap-2"
                    >
                      Book consultation
                      <ChevronDown className="w-3 h-3 -rotate-90" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-gold transition text-xs xl:text-sm font-medium whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+916363016716"
              className="btn-gold text-xs xl:text-sm flex gap-1.5 xl:gap-2 items-center text-brown font-semibold whitespace-nowrap px-3 xl:px-4 py-2"
            >
              <PhoneIcon className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">24/7 Legal Support</span>
              <span className="xl:hidden">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 hover:bg-gold/10 rounded-lg transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border overflow-hidden"
            >
              <div className="py-4 sm:py-6 px-3 sm:px-4 flex flex-col gap-3 sm:gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-base sm:text-lg text-foreground/80 hover:text-gold transition py-1 touch-manipulation"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="text-base sm:text-lg text-foreground/80 hover:text-gold transition py-1 touch-manipulation"
                >
                  About
                </a>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex justify-between items-center text-base sm:text-lg text-foreground/80 hover:text-gold transition py-1 touch-manipulation"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 sm:mt-3 ml-0 sm:ml-2 flex flex-col gap-1.5 sm:gap-2 bg-gold/5 rounded-lg p-2 sm:p-3 border border-gold/10">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={service.name}
                                href="#services"
                                onClick={(e) => handleNavClick(e, '#services')}
                                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-md hover:bg-gold/10 transition touch-manipulation active:scale-98"
                              >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs sm:text-sm font-medium text-foreground leading-tight">
                                    {service.name}
                                  </div>
                                  <div className="text-[10px] sm:text-xs text-foreground/60 mt-0.5 line-clamp-1 sm:line-clamp-2">
                                    {service.description}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="text-base sm:text-lg text-foreground/80 hover:text-gold transition py-1 touch-manipulation"
                >
                  Gallery
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-gold text-center mt-2 sm:mt-4 text-sm sm:text-base py-2.5 sm:py-3 touch-manipulation active:scale-98 transition-transform"
                >
                  Book Consultation
                </a>

                {/* Mobile Contact Button */}
                <a
                  href="tel:+916363016716"
                  className="flex items-center justify-center gap-2 text-gold border border-gold/30 hover:bg-gold/5 transition rounded-lg py-2.5 sm:py-3 text-sm sm:text-base font-medium touch-manipulation active:scale-98"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  24/7 Legal Support
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;