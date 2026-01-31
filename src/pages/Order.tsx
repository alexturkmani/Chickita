import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, ShoppingBag, Truck, Store, ChevronRight, Check } from 'lucide-react'

interface Location {
  id: string
  name: string
  subtitle?: string
  address: string
  orderUrl: string
  deliveryPartners: string[]
}

const locations: Location[] = [
  {
    id: 'port-melbourne',
    name: 'Port Melbourne',
    address: 'Bay Street, Port Melbourne VIC 3207',
    orderUrl: 'https://chickitaportmelbourne.lifeintouch.net/',
    deliveryPartners: ['UberEats', 'DoorDash', 'Menulog'],
  },
  {
    id: 'maribyrnong',
    name: 'Maribyrnong',
    subtitle: 'Highpoint',
    address: 'Level 3, Highpoint Shopping Centre, VIC 3032',
    orderUrl: 'https://chickitahighpoint.lifeintouch.net/',
    deliveryPartners: ['UberEats', 'DoorDash', 'Menulog'],
  },
  {
    id: 'point-cook',
    name: 'Point Cook',
    address: 'Main Street, Point Cook VIC 3030',
    orderUrl: 'https://chickitapointcook.lifeintouch.net/',
    deliveryPartners: ['UberEats', 'DoorDash', 'Menulog'],
  },
  {
    id: 'clyde',
    name: 'Clyde',
    subtitle: 'Clyde North',
    address: '6/21 St Germain Blvd, Clyde North VIC 3978',
    orderUrl: 'https://chickitaclyde.lifeintouch.net/',
    deliveryPartners: ['UberEats', 'DoorDash', 'Menulog'],
  },
]

type OrderType = 'pickup' | 'delivery'

export default function Order() {
  const [orderType, setOrderType] = useState<OrderType>('pickup')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId)
  }

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Order Online</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 mt-4">
            Order <span className="gradient-text">Now</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Flame-grilled perfection, ready when you are. Choose pickup or delivery from any of our Melbourne locations.
          </p>
        </div>
      </section>

      {/* Order Flow */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Order Type */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Choose Order Type</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setOrderType('pickup')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  orderType === 'pickup'
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <Store size={32} className={orderType === 'pickup' ? 'text-primary-500' : 'text-gray-400'} />
                <h3 className="text-lg font-semibold text-gray-900 mt-4">Pickup</h3>
                <p className="text-gray-600 text-sm mt-2">Order online and collect from store</p>
                {orderType === 'pickup' && (
                  <div className="flex items-center gap-2 mt-4 text-primary-500 text-sm">
                    <Check size={16} />
                    <span>Selected</span>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => setOrderType('delivery')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  orderType === 'delivery'
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <Truck size={32} className={orderType === 'delivery' ? 'text-primary-500' : 'text-gray-400'} />
                <h3 className="text-lg font-semibold text-gray-900 mt-4">Delivery</h3>
                <p className="text-gray-600 text-sm mt-2">Get it delivered to your door</p>
                {orderType === 'delivery' && (
                  <div className="flex items-center gap-2 mt-4 text-primary-500 text-sm">
                    <Check size={16} />
                    <span>Selected</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Step 2: Select Location */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Select Location</h2>
            </div>
            
            <div className="space-y-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.id)}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                    selectedLocation === location.id
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className={selectedLocation === location.id ? 'text-primary-500' : 'text-gray-400'} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Chickita {location.name}
                          {location.subtitle && (
                            <span className="text-primary-500 font-normal ml-2">({location.subtitle})</span>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{location.address}</p>
                        <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                          <Clock size={14} />
                          <span>Open until 10:00pm</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight 
                      size={24} 
                      className={selectedLocation === location.id ? 'text-primary-500' : 'text-gray-400'} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Order Now */}
          {selectedLocation && (
            <div className="mb-12 fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {orderType === 'pickup' ? 'Place Your Order' : 'Choose Delivery Partner'}
                </h2>
              </div>
              
              {orderType === 'pickup' ? (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="text-center">
                    <ShoppingBag size={48} className="text-primary-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Order from Chickita {selectedLocationData?.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You'll be redirected to our ordering system to complete your order
                    </p>
                    <a
                      href={selectedLocationData?.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors text-lg"
                    >
                      Start Your Order
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href={`https://www.ubereats.com/au/store/chickita-${selectedLocation}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary-500/50 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-16 h-16 bg-[#06C167] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">UE</span>
                    </div>
                    <h3 className="text-gray-900 font-semibold">Uber Eats</h3>
                    <p className="text-gray-600 text-sm mt-1">Order via Uber Eats</p>
                  </a>
                  
                  <a
                    href={`https://www.doordash.com/store/chickita-${selectedLocation}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary-500/50 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-16 h-16 bg-[#FF3008] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">DD</span>
                    </div>
                    <h3 className="text-gray-900 font-semibold">DoorDash</h3>
                    <p className="text-gray-600 text-sm mt-1">Order via DoorDash</p>
                  </a>
                  
                  <a
                    href={`https://www.menulog.com.au/restaurants-chickita-${selectedLocation}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary-500/50 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-16 h-16 bg-[#FF8000] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">ML</span>
                    </div>
                    <h3 className="text-gray-900 font-semibold">Menulog</h3>
                    <p className="text-gray-600 text-sm mt-1">Order via Menulog</p>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 text-center mb-8">
            Other Ways to Order
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/menu"
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-gray-900 font-semibold">View Menu</h3>
              <p className="text-gray-600 text-sm mt-1">Browse our full menu</p>
            </Link>
            
            <a
              href="https://inline.app/booking/-O3X6LyNKzatlOUxj8WW:inline-live-3/-O3X6MAZBcHoxxqNT76N"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="text-gray-900 font-semibold">Book a Table</h3>
              <p className="text-gray-600 text-sm mt-1">Dine with us in-store</p>
            </a>
            
            <Link
              to="/contact"
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="text-gray-900 font-semibold">Catering</h3>
              <p className="text-gray-600 text-sm mt-1">Order for events</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
