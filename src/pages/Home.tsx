import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, ChefHat, Flame, Users, Heart } from 'lucide-react'

// Hero Section Component
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      <div className="hero-overlay absolute inset-0" />
      
      {/* Animated flame elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-6">
          <Flame size={18} className="text-primary-500" />
          <span className="text-primary-400 text-sm font-medium">Now Open in Clyde!</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
          Asian Flame Grilled
          <span className="block gradient-text">Chicken Perfection</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Experience bold Southeast Asian flavours with our signature flame-grilled chicken. 
          100% natural Australian chicken, six unique sauces, unforgettable taste.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/order"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-all btn-glow text-lg"
          >
            Order Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-primary-500/50 text-white font-semibold rounded-full hover:bg-primary-500/10 transition-all text-lg"
          >
            View Menu
          </Link>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: 'Locations', value: '4', icon: MapPin },
            { label: 'Signature Sauces', value: '6', icon: ChefHat },
            { label: 'Years of Passion', value: '20+', icon: Heart },
            { label: 'Happy Customers', value: '50K+', icon: Users },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={24} className="text-primary-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// Featured Menu Section
function FeaturedMenu() {
  const menuItems = [
    {
      title: 'Flame Grilled Chicken',
      description: 'Our signature dish - marinated and flame-grilled to perfection with your choice of sauce',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 'From $16.90',
    },
    {
      title: 'Burgers & Wraps',
      description: 'Juicy chicken burgers and wraps loaded with fresh ingredients and bold flavours',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 'From $14.90',
    },
    {
      title: 'Rice Bowls',
      description: 'Hearty bowls with our special rice, grilled chicken, and fresh vegetables',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 'From $15.90',
    },
    {
      title: 'Salads',
      description: 'Fresh, healthy salads topped with flame-grilled chicken and signature dressings',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      price: 'From $13.90',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4">
            Flame Grilled <span className="gradient-text">Favourites</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every dish is crafted with passion using 100% natural Australian chicken and the freshest ingredients
          </p>
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-semibold">{item.price}</span>
                  <Link 
                    to="/menu" 
                    className="text-gray-700 hover:text-primary-500 transition-colors text-sm font-medium"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
          >
            Explore Full Menu
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Signature Sauces Section
function SignatureSauces() {
  const sauces = [
    { name: 'Original', heat: 0, color: 'bg-amber-400', description: 'Classic Asian-inspired marinade' },
    { name: 'Sweet Baby', heat: 1, color: 'bg-orange-400', description: 'Sweet and tangy glaze' },
    { name: 'Lucky 8', heat: 2, color: 'bg-orange-500', description: 'Eight-spice aromatic blend' },
    { name: 'Red Dragon', heat: 3, color: 'bg-red-500', description: 'Bold and fiery' },
    { name: 'Flaming', heat: 4, color: 'bg-red-600', description: 'Intense heat lovers\' choice' },
    { name: 'Dynamite', heat: 5, color: 'bg-red-700', description: 'For the brave only' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Signature Sauces</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4">
              Six Unique <span className="gradient-text">Flavours</span>
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Our signature sauces are crafted with artisanal Asian ingredients, carefully developed to complement our flame-grilled chicken. From mild and sweet to flaming hot, there's a sauce for every palate.
            </p>
            
            {/* Sauce List */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {sauces.map((sauce) => (
                <div key={sauce.name} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                  <div className={`w-3 h-3 rounded-full ${sauce.color}`} />
                  <div>
                    <span className="text-gray-900 font-medium">{sauce.name}</span>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Flame
                          key={i}
                          size={12}
                          className={i < sauce.heat ? 'text-primary-500' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link
              to="/sauces"
              className="inline-flex items-center gap-2 mt-8 text-primary-500 hover:text-primary-400 transition-colors font-medium"
            >
              Discover Our Sauces
              <ArrowRight size={20} />
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Signature sauces"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Locations Preview Section
function LocationsPreview() {
  const locations = [
    {
      name: 'Port Melbourne',
      address: 'Bay Street, Port Melbourne VIC 3207',
      hours: '10:30am - 10:00pm',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isNew: true,
    },
    {
      name: 'Maribyrnong',
      subtitle: 'Highpoint Shopping Centre',
      address: 'Level 3, 200 Rosamond Rd, VIC 3032',
      hours: '10:30am - 9:30pm',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Point Cook',
      address: 'Main Street, Point Cook VIC 3030',
      hours: '10:30am - 10:00pm',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isNew: true,
    },
    {
      name: 'Clyde',
      address: '6/21 St Germain Blvd, Clyde North VIC 3978',
      hours: '10:30am - 10:00pm',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isNew: true,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Locations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4">
            Find Us <span className="gradient-text">Near You</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Four convenient locations across Melbourne. Visit us for dine-in, takeaway, or order online for delivery.
          </p>
        </div>
        
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {location.isNew && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                {location.subtitle && (
                  <p className="text-primary-500 text-sm">{location.subtitle}</p>
                )}
                <div className="flex items-start gap-2 mt-3 text-gray-600 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <Clock size={16} />
                  <span>{location.hours}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Link
                    to="/order"
                    className="flex-1 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg text-center hover:bg-primary-400 transition-colors"
                  >
                    Order
                  </Link>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg text-center hover:border-primary-500 hover:text-primary-500 transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
          >
            View All Location Details
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Why Chickita Section
function WhyChickita() {
  const features = [
    {
      icon: '🍗',
      title: '100% Natural Chicken',
      description: 'We only serve Australian chicken with no added hormones or artificial additives',
    },
    {
      icon: '🔥',
      title: 'Flame Grilled',
      description: 'Every piece is flame-grilled to perfection, never fried, for that authentic smoky flavour',
    },
    {
      icon: '🥗',
      title: 'Fresh & Healthy',
      description: 'Locally sourced produce and gluten-free, dairy-free options available',
    },
    {
      icon: '☪️',
      title: 'Halal Certified',
      description: 'All our chicken is halal certified, ensuring quality and peace of mind',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Friendly',
      description: 'A welcoming atmosphere perfect for family dinners and celebrations',
    },
    {
      icon: '🌶️',
      title: 'Bold Asian Flavours',
      description: 'Six signature sauces crafted with authentic Southeast Asian ingredients',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4">
            What's Not to <span className="gradient-text">Love?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Chickita is all about good food, good service, good value, and good times
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            Ready to Experience the <span className="gradient-text">Flame?</span>
          </h2>
          <p className="text-gray-300 mt-6 text-lg">
            Order online for pickup or delivery, or book a table for the full Chickita experience. 
            Perfect for family dinners, celebrations, or a quick delicious meal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-all text-lg"
            >
              Order Online
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://inline.app/booking/-O3X6LyNKzatlOUxj8WW:inline-live-3/-O3X6MAZBcHoxxqNT76N"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-lg"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Home Page Component
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <SignatureSauces />
      <LocationsPreview />
      <WhyChickita />
      <CTASection />
    </>
  )
}
