import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Leaf, X } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
  isSpicy?: boolean
  isVegetarian?: boolean
  isGlutenFree?: boolean
  isPopular?: boolean
}

interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: 'flame-grilled',
    name: 'Flame Grilled Chicken',
    description: 'Our signature flame-grilled chicken, marinated for 24 hours and grilled to perfection',
    items: [
      {
        id: 'quarter-chicken',
        name: 'Quarter Chicken',
        description: 'Quarter flame-grilled chicken with your choice of signature sauce',
        price: '$12.90',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
      {
        id: 'half-chicken',
        name: 'Half Chicken',
        description: 'Half flame-grilled chicken with your choice of signature sauce',
        price: '$18.90',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
      {
        id: 'whole-chicken',
        name: 'Whole Chicken',
        description: 'Whole flame-grilled chicken perfect for sharing',
        price: '$32.90',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'family-feast',
        name: 'Family Feast',
        description: 'Whole chicken with 4 sides and 4 drinks - perfect for the family',
        price: '$59.90',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
    ],
  },
  {
    id: 'burgers-wraps',
    name: 'Burgers & Wraps',
    description: 'Juicy chicken burgers and wraps loaded with fresh ingredients',
    items: [
      {
        id: 'chickita-burger',
        name: 'Chickita Burger',
        description: 'Flame-grilled chicken, fresh slaw, pickles, and signature sauce on a brioche bun',
        price: '$14.90',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
      {
        id: 'spicy-burger',
        name: 'Spicy Dragon Burger',
        description: 'Flame-grilled chicken with Red Dragon sauce, jalapeños, and spicy mayo',
        price: '$15.90',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isSpicy: true,
      },
      {
        id: 'chickita-wrap',
        name: 'Chickita Wrap',
        description: 'Flame-grilled chicken, fresh salad, and signature sauce in a soft tortilla',
        price: '$13.90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'asian-fusion-wrap',
        name: 'Asian Fusion Wrap',
        description: 'Flame-grilled chicken with Asian slaw, crispy noodles, and Lucky 8 sauce',
        price: '$14.90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'rice-bowls',
    name: 'Rice Bowls',
    description: 'Hearty bowls with our special rice and flame-grilled chicken',
    items: [
      {
        id: 'chickita-bowl',
        name: 'Chickita Bowl',
        description: 'Flame-grilled chicken, special rice, fresh vegetables, and your choice of sauce',
        price: '$16.90',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
      {
        id: 'teriyaki-bowl',
        name: 'Teriyaki Style Bowl',
        description: 'Flame-grilled chicken with teriyaki glaze, edamame, and pickled ginger',
        price: '$17.90',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'korean-bowl',
        name: 'Korean BBQ Bowl',
        description: 'Flame-grilled chicken, kimchi, pickled vegetables, and gochujang sauce',
        price: '$17.90',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isSpicy: true,
      },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh, healthy salads topped with flame-grilled chicken',
    items: [
      {
        id: 'asian-salad',
        name: 'Asian Chicken Salad',
        description: 'Mixed greens, grilled chicken, crispy noodles, and sesame dressing',
        price: '$15.90',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isGlutenFree: true,
      },
      {
        id: 'caesar-salad',
        name: 'Chickita Caesar',
        description: 'Romaine lettuce, grilled chicken, parmesan, croutons, and caesar dressing',
        price: '$14.90',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'garden-salad',
        name: 'Garden Fresh Salad',
        description: 'Seasonal vegetables, grilled chicken, and light vinaigrette',
        price: '$13.90',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isVegetarian: true,
        isGlutenFree: true,
      },
    ],
  },
  {
    id: 'sides',
    name: 'Snacks & Sides',
    description: 'Perfect additions to complete your meal',
    items: [
      {
        id: 'chips',
        name: 'Seasoned Chips',
        description: 'Crispy chips with our special Asian seasoning',
        price: '$5.90',
        image: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isVegetarian: true,
      },
      {
        id: 'coleslaw',
        name: 'Asian Coleslaw',
        description: 'Fresh cabbage slaw with sesame dressing',
        price: '$4.90',
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        id: 'rice',
        name: 'Special Rice',
        description: 'Our signature fragrant rice',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        id: 'corn',
        name: 'Grilled Corn',
        description: 'Flame-grilled corn on the cob with butter and seasoning',
        price: '$4.90',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        id: 'wings',
        name: 'Chicken Wings',
        description: '6 crispy wings with your choice of sauce',
        price: '$12.90',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        isPopular: true,
      },
      {
        id: 'nuggets',
        name: 'Chicken Nuggets',
        description: '8 crispy chicken nuggets with dipping sauce',
        price: '$9.90',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Refreshing beverages to complement your meal',
    items: [
      {
        id: 'soft-drink',
        name: 'Soft Drinks',
        description: 'Coke, Sprite, Fanta, or Lift',
        price: '$3.90',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        description: 'Refreshing iced tea - Lemon or Peach',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'water',
        name: 'Bottled Water',
        description: 'Still or Sparkling',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('flame-grilled')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 mt-4">
            Flame Grilled <span className="gradient-text">Goodness</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Every dish is made with 100% natural Australian chicken, flame-grilled to perfection 
            and served with our signature Asian-inspired sauces.
          </p>
          
          {/* Dietary Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Flame size={16} className="text-primary-500" />
              <span className="text-sm text-gray-600">Spicy</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Leaf size={16} className="text-green-500" />
              <span className="text-sm text-gray-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-xs font-bold text-amber-500">GF</span>
              <span className="text-sm text-gray-600">Gluten Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[5rem] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentCategory && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-gray-900">{currentCategory.name}</h2>
                <p className="text-gray-600 mt-2">{currentCategory.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:border-primary-500/50 hover:shadow-lg transition-all cursor-pointer card-hover"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.isPopular && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center gap-1">
                          {item.isSpicy && <Flame size={16} className="text-primary-500" />}
                          {item.isVegetarian && <Leaf size={16} className="text-green-500" />}
                          {item.isGlutenFree && <span className="text-xs font-bold text-amber-500">GF</span>}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-primary-500 font-bold text-lg">{item.price}</span>
                        <Link 
                          to="/order"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                        >
                          Add to Order
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900">
            Ready to Order?
          </h2>
          <p className="text-gray-600 mt-4">
            Order online for pickup or delivery from any of our four Melbourne locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors"
            >
              Order Online
            </Link>
            <a
              href="https://static1.squarespace.com/static/662f70130000ab180c3fd63e/t/691d11182a531900d068004a/1763512600563/20251119+Chickita+-+A3+Menu+2025+FINAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all"
            >
              Download Full Menu (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Item Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-display font-bold text-gray-900">{selectedItem.name}</h3>
                <span className="text-primary-500 font-bold text-xl">{selectedItem.price}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                {selectedItem.isSpicy && (
                  <span className="flex items-center gap-1 text-sm text-primary-500">
                    <Flame size={14} /> Spicy
                  </span>
                )}
                {selectedItem.isVegetarian && (
                  <span className="flex items-center gap-1 text-sm text-green-500">
                    <Leaf size={14} /> Vegetarian
                  </span>
                )}
                {selectedItem.isGlutenFree && (
                  <span className="text-sm text-amber-500">Gluten Free</span>
                )}
              </div>
              <p className="text-gray-600 mt-4">{selectedItem.description}</p>
              <Link
                to="/order"
                className="w-full mt-6 py-3 bg-primary-500 text-white font-semibold rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
