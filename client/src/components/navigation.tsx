import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MoveRight } from "lucide-react";
import logoImage from "@/assets/logo_final.png";
import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#apps", label: "Apps" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 120;
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-lg shadow-xl border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#home" onClick={() => scrollToSection('#home')} className="flex items-center">
            <img 
              src={logoImage} 
              alt="Skoolary Logo" 
              className="h-16 md:h-20 lg:h-28 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary-yellow"
                    : "text-white hover:text-primary-yellow"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-primary-yellow rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="hidden md:flex items-center gap-2 button-hover bg-primary-yellow text-dark-gray hover:bg-yellow-400 px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105"
            >
              Get Started
              <MoveRight className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-gray border-gray-700">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left py-2 text-lg transition-colors ${
                        activeSection === link.href.substring(1) ? "text-primary-yellow" : "text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection('#contact')}
                    className="mt-4 w-full flex items-center gap-2 bg-primary-yellow text-dark-gray hover:bg-yellow-400 py-3 rounded-full font-semibold"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}