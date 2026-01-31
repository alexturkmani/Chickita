import { Link } from 'react-router-dom'
import { Users, Cake, Briefcase, PartyPopper, ArrowRight } from 'lucide-react'

export default function Functions() {
  const functionTypes = [
    {
      icon: Users,
      title: 'Family Dinners',
      description: 'Bring the whole family together for a delicious flame-grilled feast. Our spacious dining areas are perfect for family gatherings of all sizes.',
      image: 'https://images.unsplash.com/photo-1529543544277-750e2ea37ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: Cake,
      title: 'Birthday Celebrations',
      description: 'Make birthdays extra special with Chickita! We offer birthday packages with special decorations and treats for the guest of honor.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with our corporate function packages. Perfect for team lunches, client dinners, and business celebrations.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      icon: PartyPopper,
      title: 'Group Catch-ups',
      description: 'Catching up with friends? Our bold Asian-inspired flavours and welcoming atmosphere make Chickita the perfect spot for group gatherings.',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ]

  const packages = [
    {
      name: 'Group Package',
      price: '$25',
      priceNote: 'per person',
      minGuests: '10+ guests',
      includes: [
        'Starter platter to share',
        'Choice of main (Quarter Chicken, Burger, or Bowl)',
        'Signature side dish',
        'Soft drink or iced tea',
        'Dessert to share',
      ],
    },
    {
      name: 'Celebration Package',
      price: '$35',
      priceNote: 'per person',
      minGuests: '15+ guests',
      includes: [
        'Welcome drinks on arrival',
        'Mixed starter platters',
        'Choice of main (Half Chicken, Premium Burger, or Premium Bowl)',
        'Two signature sides per table',
        'Unlimited soft drinks',
        'Birthday cake / celebration dessert',
        'Party decorations',
      ],
      isPopular: true,
    },
    {
      name: 'Premium Package',
      price: '$50',
      priceNote: 'per person',
      minGuests: '20+ guests',
      includes: [
        'Exclusive area reservation',
        'Welcome drinks & canapés',
        'Premium starter selection',
        'Whole chicken per 4 guests',
        'All six signature sauces',
        'Full sides selection',
        'Premium drinks package',
        'Custom dessert platter',
        'Dedicated event coordinator',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Functions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-900" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Functions & Events</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-4">
            Celebrate with <span className="gradient-text">Chickita</span>
          </h1>
          <p className="text-dark-300 mt-6 max-w-2xl mx-auto text-lg">
            Chickita is the perfect spot for family dinners, group catch-ups, birthday celebrations, 
            kids' parties, and corporate functions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.chickita.com.au/s/20250201-Chickita-Functions-Set-Menu-Web.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-black font-semibold rounded-full hover:bg-primary-400 transition-colors"
            >
              View Function Packages
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Function Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Perfect for <span className="gradient-text">Every Occasion</span>
            </h2>
            <p className="text-dark-300 mt-4 max-w-2xl mx-auto">
              Our bold Asian-inspired flavours are sure to please every palate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functionTypes.map((type) => (
              <div
                key={type.title}
                className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                      <type.icon size={20} className="text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  </div>
                  <p className="text-dark-400">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Function <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-dark-300 mt-4 max-w-2xl mx-auto">
              We offer a range of function packages to suit groups of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-dark-900 rounded-2xl p-8 border ${
                  pkg.isPopular ? 'border-primary-500' : 'border-dark-700'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-dark-500 text-sm mb-4">{pkg.minGuests}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-dark-400">/{pkg.priceNote}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? 'bg-primary-500 text-black hover:bg-primary-400'
                      : 'border border-dark-600 text-white hover:border-primary-500 hover:text-primary-500'
                  }`}
                >
                  Enquire Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center text-dark-500 mt-8">
            * Custom packages available. Contact us for more details.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Event <span className="gradient-text">Gallery</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1529543544277-750e2ea37ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Book Your Event Today
          </h2>
          <p className="text-white/80 mt-4">
            Our team is ready to help you plan the perfect event. Get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-cream-100 transition-colors"
            >
              Send Functions Enquiry
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0395965473"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Call Us: 03 9596 5473
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
