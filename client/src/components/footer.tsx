import { Bus, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { href: "#about", label: "About Us" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#apps", label: "Mobile Apps" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ],
  support: [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Safety Guidelines" },
    { href: "#", label: "API Documentation" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", hoverColor: "hover:bg-primary-yellow" },
  { icon: Twitter, href: "#", hoverColor: "hover:bg-primary-yellow" },
  { icon: Instagram, href: "#", hoverColor: "hover:bg-primary-yellow" },
  { icon: Linkedin, href: "#", hoverColor: "hover:bg-primary-yellow" }
];

const contactInfo = [
  { icon: "📞", text: "+91-9876543210" },
  { icon: "✉️", text: "hello@skoolary.in" },
  { icon: "📍", text: "Koramangala, Bangalore\nKarnataka 560034, India" }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-yellow rounded-lg flex items-center justify-center">
                <Bus className="h-6 w-6 text-dark-gray" />
              </div>
              <span className="text-2xl font-poppins font-bold">Skoolary.in</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Making school transportation safer, smarter, and more reliable for families across India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${social.hoverColor} hover:text-dark-gray transition-all duration-300`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-primary-yellow transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <div className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-primary-yellow text-lg">{contact.icon}</span>
                  <span className="text-gray-300 whitespace-pre-line">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Skoolary.in. All rights reserved.
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-gray-400">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
