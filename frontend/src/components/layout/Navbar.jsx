import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, PhoneIcon, X, ChevronDown, Scale, Shield, Home as HomeIcon, Users, ShoppingCart, FileText } from "lucide-react";
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
    description: "Comprehensive civil dispute resolution"
  },
  { 
    name: "Criminal Law", 
    icon: Shield,
    description: "Expert criminal defense representation"
  },
  { 
    name: "Constitutional & Writ Jurisdiction", 
    icon: FileText,
    description: "Constitutional matters & writ petitions"
  },
  { 
    name: "Family & Matrimonial Law", 
    icon: Users,
    description: "Family disputes & matrimonial cases"
  },
  { 
    name: "Consumer Protection Law", 
    icon: ShoppingCart,
    description: "Consumer rights & protection"
  },
  { 
    name: "Property & Real Estate Law", 
    icon: HomeIcon,
    description: "Property transactions & disputes"
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="container mx-auto px-4 md:px-8 w-full">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#home">
            <img
              src={logo}
              alt="Balagali Associates logo"
              className="h-10 md:h-20"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-foreground/80 hover:text-gold transition text-sm font-medium"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-foreground/80 hover:text-gold transition text-sm font-medium"
            >
              About
            </a>

            {/* Enhanced Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-foreground/80 hover:text-gold transition text-sm font-medium py-2">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-zinc-900 rotate-45 border-l border-t border-border"></div>
                
                {/* Dropdown content */}
                <div className="relative bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-2xl overflow-hidden mt-2">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-b border-border px-6 py-4">
                    <h3 className="text-sm font-semibold text-foreground">Our Legal Services</h3>
                    <p className="text-xs text-foreground/60 mt-1">Expert legal solutions tailored to your needs</p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.a
                          key={service.name}
                          href="#services"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group/item relative p-4 rounded-lg hover:bg-gold/5 transition-all duration-300 border border-transparent hover:border-gold/20 hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover/item:bg-gold/20 transition-colors">
                              <Icon className="w-5 h-5 text-gold" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground group-hover/item:text-gold transition-colors leading-tight">
                                {service.name}
                              </h4>
                              <p className="text-xs text-foreground/60 mt-1 leading-snug">
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
                  <div className="border-t border-border bg-gradient-to-r from-gold/5 to-transparent px-6 py-3">
                    <a 
                      href="#contact" 
                      className="text-xs font-medium text-gold hover:text-gold/80 transition-colors flex items-center gap-2"
                    >
                      View all services & book consultation
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
                className="text-foreground/80 hover:text-gold transition text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+916363016716"
              className="btn-gold text-sm flex gap-2 items-center text-brown font-semibold"
            >
              <PhoneIcon className="w-4 h-4" />
              24/7 Legal Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
              className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border overflow-hidden"
            >
              <div className="py-6 px-4 flex flex-col gap-4">
                <a
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-foreground/80 hover:text-gold transition"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-foreground/80 hover:text-gold transition"
                >
                  About
                </a>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex justify-between items-center text-lg text-foreground/80 hover:text-gold transition"
                  >
                    Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
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
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-2 flex flex-col gap-2 bg-gold/5 rounded-lg p-3 border border-gold/10">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <a
                                key={service.name}
                                href="#services"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                                className="flex items-center gap-3 p-2 rounded-md hover:bg-gold/10 transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-4 h-4 text-gold" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-foreground">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-foreground/60">
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-foreground/80 hover:text-gold transition"
                >
                  Gallery
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold text-center mt-4"
                >
                  Book Consultation
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