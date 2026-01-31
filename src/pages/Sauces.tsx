import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'

interface Sauce {
  id: string
  name: string
  heatLevel: number
  color: string
  bgColor: string
  description: string
  ingredients: string[]
  pairings: string[]
}

const sauces: Sauce[] = [
  {
    id: 'original',
    name: 'Original',
    heatLevel: 0,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400',
    description: 'Our classic Asian-inspired marinade. A perfect balance of savory and sweet with hints of garlic and ginger. The foundation of all our flavours.',
    ingredients: ['Soy sauce', 'Ginger', 'Garlic', 'Sesame', 'Honey'],
    pairings: ['Whole Chicken', 'Rice Bowls', 'Wraps'],
  },
  {
    id: 'sweet-baby',
    name: 'Sweet Baby',
    heatLevel: 1,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400',
    description: 'A sweet and tangy glaze with a gentle kick. Made with palm sugar and tamarind, this sauce is perfect for those who love a touch of sweetness.',
    ingredients: ['Palm sugar', 'Tamarind', 'Lime', 'Chilli flakes'],
    pairings: ['Wings', 'Nuggets', 'Burgers'],
  },
  {
    id: 'lucky-8',
    name: 'Lucky 8',
    heatLevel: 2,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500',
    description: 'An aromatic blend of eight traditional Asian spices. Complex, fragrant, and lucky! A harmonious combination that brings good fortune to your taste buds.',
    ingredients: ['Star anise', 'Cinnamon', 'Cloves', 'Sichuan pepper', 'Fennel'],
    pairings: ['Quarter Chicken', 'Rice Bowls', 'Salads'],
  },
  {
    id: 'red-dragon',
    name: 'Red Dragon',
    heatLevel: 3,
    color: 'text-red-500',
    bgColor: 'bg-red-500',
    description: 'Bold, fiery, and full of character. Inspired by Sichuan cuisine, this sauce brings the heat with fermented chilli and numbing peppercorns.',
    ingredients: ['Sichuan chilli', 'Fermented bean paste', 'Garlic', 'Ginger'],
    pairings: ['Spicy Burger', 'Korean Bowl', 'Wings'],
  },
  {
    id: 'flaming',
    name: 'Flaming',
    heatLevel: 4,
    color: 'text-red-600',
    bgColor: 'bg-red-600',
    description: 'For serious heat seekers. A blazing combination of bird\'s eye chillies and habanero that will set your taste buds on fire.',
    ingredients: ['Bird\'s eye chilli', 'Habanero', 'Ghost pepper', 'Citrus'],
    pairings: ['Half Chicken', 'Wraps', 'Rice Bowls'],
  },
  {
    id: 'dynamite',
    name: 'Dynamite',
    heatLevel: 5,
    color: 'text-red-700',
    bgColor: 'bg-red-700',
    description: 'Our hottest sauce – for the brave only! An explosive blend of the world\'s hottest peppers. Sign a waiver before attempting!',
    ingredients: ['Carolina Reaper', 'Trinidad Scorpion', 'Ghost pepper', 'Capsaicin extract'],
    pairings: ['Wings (if you dare)', 'Nuggets', 'Dipping'],
  },
]

export default function Sauces() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Signature Sauces</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-4">
            Six Unique <span className="gradient-text">Flavours</span>
          </h1>
          <p className="text-dark-300 mt-6 max-w-2xl mx-auto text-lg">
            Our signature sauces are carefully crafted with artisanal Asian ingredients, 
            developed to perfectly complement our flame-grilled chicken.
          </p>
          
          {/* Heat Scale Legend */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-dark-400 text-sm">Heat Level:</span>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((level) => (
                <div key={level} className="flex items-center gap-1">
                  <Flame 
                    size={16} 
                    className={level === 0 ? 'text-dark-600' : level <= 2 ? 'text-orange-400' : 'text-red-500'} 
                  />
                </div>
              ))}
            </div>
            <span className="text-dark-400 text-sm">Mild to Extreme</span>
          </div>
        </div>
      </section>

      {/* Sauces Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sauces.map((sauce) => (
              <div
                key={sauce.id}
                className="sauce-card bg-dark-800 rounded-3xl p-8 border border-dark-700 hover:border-primary-500/30 transition-all"
              >
                {/* Sauce Icon */}
                <div className={`w-20 h-20 ${sauce.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Flame size={36} className="text-white" />
                </div>
                
                {/* Name & Heat */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">{sauce.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Flame
                        key={i}
                        size={18}
                        className={i < sauce.heatLevel ? sauce.color : 'text-dark-600'}
                        fill={i < sauce.heatLevel ? 'currentColor' : 'none'}
                      />
                    ))}
                    {sauce.heatLevel === 0 && (
                      <span className="text-dark-400 text-sm ml-2">Mild</span>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-dark-400 text-center mb-6">{sauce.description}</p>
                
                {/* Key Ingredients */}
                <div className="mb-4">
                  <h4 className="text-white text-sm font-semibold mb-2">Key Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {sauce.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="px-3 py-1 bg-dark-700 text-dark-300 text-xs rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Best With */}
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">Best With</h4>
                  <div className="flex flex-wrap gap-2">
                    {sauce.pairings.map((pairing) => (
                      <span
                        key={pairing}
                        className="px-3 py-1 bg-primary-500/10 text-primary-500 text-xs rounded-full"
                      >
                        {pairing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauce Story */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Crafted with <span className="gradient-text">Passion</span>
              </h2>
              <div className="mt-6 space-y-4 text-dark-300 leading-relaxed">
                <p>
                  The Chickita® sauce recipes have been carefully developed over years of 
                  experimentation and refinement to perfectly complement our flame-grilled chicken.
                </p>
                <p>
                  We work directly with local farmers across Asia, sourcing the best and freshest 
                  ingredients. Each sauce tells a story of traditional Asian cooking techniques 
                  combined with modern culinary innovation.
                </p>
                <p>
                  From the mild and approachable Original to the explosive Dynamite, our six 
                  signature sauces offer a journey through the diverse flavours of Southeast Asia.
                </p>
              </div>
              
              <Link
                to="/order"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
              >
                Try Our Sauces
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chickita signature sauces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white">
            Ready to Find Your Favourite?
          </h2>
          <p className="text-dark-300 mt-4">
            Visit any of our four Melbourne locations and discover which sauce is your perfect match
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
            >
              Order Now
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
