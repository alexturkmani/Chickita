import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Navigation, Star, Car, ShoppingBag } from 'lucide-react'

interface Location {
  id: string
  name: string
  subtitle?: string
  address: string
  fullAddress: string
  phone: string
  hours: {
    weekday: string
    weekend: string
  }
  features: string[]
  image: string
  mapUrl: string
  orderUrl: string
  isNew?: boolean
  rating: number
  reviews: number
  parking?: string
  publicTransport?: string
}

const locations: Location[] = [
  {
    id: 'port-melbourne',
    name: 'Port Melbourne',
    address: 'Bay Street, Port Melbourne',
    fullAddress: 'Bay Street, Port Melbourne VIC 3207',
    phone: '03 9000 0001',
    hours: {
      weekday: '10:30am - 10:00pm',
      weekend: '10:30am - 10:00pm',
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'Catering', 'Functions'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Port+Melbourne+VIC+3207',
    orderUrl: 'https://chickitaportmelbourne.lifeintouch.net/',
    isNew: true,
    rating: 4.8,
    reviews: 120,
    parking: 'Street parking available, paid parking nearby',
    publicTransport: 'Tram 109, Bus routes available',
  },
  {
    id: 'maribyrnong',
    name: 'Maribyrnong',
    subtitle: 'Highpoint Shopping Centre',
    address: 'Level 3, Highpoint Shopping Centre',
    fullAddress: 'Level 3 (Aquatic Drive Entrance), Highpoint Shopping Centre, 200 Rosamond Rd, Maribyrnong VIC 3032',
    phone: '03 9596 5473',
    hours: {
      weekday: 'Sun-Wed: 10:30am - 9:30pm, Thu-Sat: 10:30am - 10:00pm',
      weekend: '10:30am - 10:00pm',
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'Catering', 'Functions', 'Kids Play Area'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.app.goo.gl/VRRXQqQqQU2rF9rZ6',
    orderUrl: 'https://chickitahighpoint.lifeintouch.net/',
    rating: 4.7,
    reviews: 450,
    parking: 'Free parking at Highpoint Shopping Centre',
    publicTransport: 'Bus routes 406, 410, 472, 476',
  },
  {
    id: 'point-cook',
    name: 'Point Cook',
    address: 'Main Street, Point Cook',
    fullAddress: 'Main Street, Point Cook VIC 3030',
    phone: '03 9000 0002',
    hours: {
      weekday: '10:30am - 10:00pm',
      weekend: '10:30am - 10:00pm',
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'Catering', 'Drive-through'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=Point+Cook+VIC+3030',
    orderUrl: 'https://chickitapointcook.lifeintouch.net/',
    isNew: true,
    rating: 4.9,
    reviews: 85,
    parking: 'Free on-site parking',
    publicTransport: 'Bus routes available',
  },
  {
    id: 'clyde',
    name: 'Clyde',
    subtitle: 'Clyde North',
    address: '6/21 St Germain Blvd',
    fullAddress: '6/21 St Germain Blvd, Clyde North VIC 3978',
    phone: '03 9969 2439',
    hours: {
      weekday: '10:30am - 10:00pm',
      weekend: '10:30am - 10:00pm',
    },
    features: ['Dine-in', 'Takeaway', 'Delivery', 'Catering', 'Functions'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mapUrl: 'https://maps.google.com/?q=6/21+St+Germain+Blvd+Clyde+North+VIC+3978',
    orderUrl: 'https://chickitaclyde.lifeintouch.net/',
    isNew: true,
    rating: 4.8,
    reviews: 65,
    parking: 'Free on-site parking',
    publicTransport: 'Bus routes available',
  },
]

export default function Locations() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Locations</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-4">
            Find Us <span className="gradient-text">Near You</span>
          </h1>
          <p className="text-dark-300 mt-6 max-w-2xl mx-auto text-lg">
            Four convenient locations across Melbourne. Visit us for dine-in, takeaway, or order online for delivery.
          </p>
        </div>
      </section>

      {/* Map Overview - Placeholder for interactive map */}
      <section className="py-8 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-700 rounded-2xl overflow-hidden h-[300px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary-500 mx-auto mb-4" />
              <p className="text-dark-300">Interactive map coming soon</p>
              <p className="text-dark-400 text-sm mt-2">Click on any location below to get directions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`bg-dark-800 rounded-3xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-colors ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:flex">
                  {/* Image */}
                  <div className={`lg:w-2/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                      {location.isNew && (
                        <div className="absolute top-4 left-4 px-4 py-2 bg-primary-500 text-white font-semibold rounded-full">
                          NEW LOCATION
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-dark-900/80 backdrop-blur-sm rounded-full">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-medium">{location.rating}</span>
                        <span className="text-dark-400 text-sm">({location.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-display font-bold text-white">
                          Chickita {location.name}
                        </h2>
                        {location.subtitle && (
                          <p className="text-primary-500 font-medium mt-1">{location.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin size={20} className="text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Address</h4>
                          <p className="text-dark-400 text-sm mt-1">{location.fullAddress}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock size={20} className="text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Hours</h4>
                          <p className="text-dark-400 text-sm mt-1">{location.hours.weekday}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone size={20} className="text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Phone</h4>
                          <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-dark-400 text-sm mt-1 hover:text-primary-500 transition-colors">
                            {location.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Car size={20} className="text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Parking</h4>
                          <p className="text-dark-400 text-sm mt-1">{location.parking}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-white font-medium mb-3">Available Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1.5 bg-dark-700 text-dark-300 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={location.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
                      >
                        <ShoppingBag size={18} />
                        Order Now
                      </a>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-dark-600 text-white font-semibold rounded-full hover:border-primary-500 hover:text-primary-500 transition-colors"
                      >
                        <Navigation size={18} />
                        Get Directions
                      </a>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-dark-600 text-white font-semibold rounded-full hover:border-primary-500 hover:text-primary-500 transition-colors"
                      >
                        <Phone size={18} />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white">
            More Locations <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-dark-300 mt-4">
            We're expanding across Melbourne and beyond! Stay tuned for new Chickita locations near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
            >
              Franchise Enquiry
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
