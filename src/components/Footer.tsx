import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Sauces', href: '/sauces' },
    { name: 'Locations', href: '/locations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Order Online', href: '/order' },
    { name: 'Book a Table', href: 'https://inline.app/booking/-O3X6LyNKzatlOUxj8WW:inline-live-3/-O3X6MAZBcHoxxqNT76N', external: true },
    { name: 'Functions & Events', href: '/functions' },
    { name: 'Catering', href: '/contact' },
    { name: 'Franchise Opportunity', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQs', href: '/faqs' },
  ],
}

const locations = [
  { name: 'Port Melbourne', address: 'Bay Street, Port Melbourne VIC 3207' },
  { name: 'Maribyrnong (Highpoint)', address: 'Level 3, Highpoint Shopping Centre, 200 Rosamond Rd, VIC 3032' },
  { name: 'Point Cook', address: 'Main Street, Point Cook VIC 3030' },
  { name: 'Clyde', address: '6/21 St Germain Blvd, Clyde North VIC 3978' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-800">
      {/* Newsletter Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-black">Stay Updated</h3>
              <p className="text-black/70 mt-1">Get exclusive offers, new menu items, and event updates</p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-5 py-3 rounded-full bg-black/10 border border-black/20 text-black placeholder:text-black/60 focus:outline-none focus:border-black/40"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-primary-500 font-semibold rounded-full hover:bg-dark-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">C</span>
              </div>
              <div>
                <span className="text-2xl font-display font-bold text-white">Chickita</span>
                <span className="text-primary-500 text-2xl">®</span>
              </div>
            </Link>
            <p className="mt-4 text-dark-400 leading-relaxed">
              We're bringing Australia a unique Asian-inspired take on healthy, family-friendly flame-grilled chicken dining. Come together for chicken!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/chickita.au"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:text-black transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/chickitaau/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@chickita.australia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:text-black transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:flame@chickita.com.au" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
                <Mail size={18} />
                <span>flame@chickita.com.au</span>
              </a>
              <a href="tel:0395965473" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
                <Phone size={18} />
                <span>03 9596 5473</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-dark-400 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-dark-400 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-dark-400 hover:text-primary-500 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.name} className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">{location.name}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link 
              to="/locations" 
              className="inline-block mt-4 text-primary-500 hover:text-primary-400 transition-colors font-medium"
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              © {new Date().getFullYear()} Chickita®. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.href} className="text-dark-500 text-sm hover:text-primary-500 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
