import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Our Sauces', href: '/sauces' },
  { name: 'Locations', href: '/locations' },
  { name: 'Functions', href: '/functions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-500 text-black py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:0395965473" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} />
              <span>03 9596 5473</span>
            </a>
            <span className="hidden sm:flex items-center gap-2">
              <MapPin size={14} />
              <span>4 Locations across Melbourne</span>
            </span>
          </div>
          <Link 
            to="/order" 
            className="font-semibold hover:text-white transition-colors"
          >
            Order Online →
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">C</span>
              </div>
              <div>
                <span className="text-2xl font-display font-bold text-white">Chickita</span>
                <span className="text-primary-500 text-2xl">®</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === item.href 
                      ? 'text-primary-500' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/order"
                className="px-6 py-2.5 bg-primary-500 text-black font-semibold rounded-full hover:bg-primary-400 transition-colors btn-glow"
              >
                Order Now
              </Link>
              <a
                href="https://inline.app/booking/-O3X6LyNKzatlOUxj8WW:inline-live-3/-O3X6MAZBcHoxxqNT76N"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-black transition-all"
              >
                Book a Table
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[calc(2.5rem+5rem)] bg-black/98 backdrop-blur-md mobile-menu-enter">
            <nav className="flex flex-col p-6 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium py-3 border-b border-dark-800 transition-colors hover:text-primary-500 ${
                    location.pathname === item.href 
                      ? 'text-primary-500' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  to="/order"
                  className="w-full py-3 bg-primary-500 text-black font-semibold rounded-full text-center"
                >
                  Order Now
                </Link>
                <a
                  href="https://inline.app/booking/-O3X6LyNKzatlOUxj8WW:inline-live-3/-O3X6MAZBcHoxxqNT76N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full text-center"
                >
                  Book a Table
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
