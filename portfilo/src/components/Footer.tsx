import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Brand
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((link) => (
                <Link 
                  key={link} 
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com", Icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com", Icon: FaLinkedinIn, label: "LinkedIn" },
                { href: "https://twitter.com", Icon: FaTwitter, label: "Twitter" },
                { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
                { href: "https://dribbble.com", Icon: FaDribbble, label: "Dribbble" },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="group relative p-2 hover:text-white transition-colors duration-300"
                >
                  <span className="absolute inset-0 bg-white/10 scale-0 rounded-lg group-hover:scale-100 transition-transform duration-300" />
                  <span className="relative">
                    <span className="sr-only">{label}</span>
                    <Icon className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
