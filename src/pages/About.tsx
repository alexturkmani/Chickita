import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Heart, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-4">
              Come Together for <span className="gradient-text">Chicken</span>
            </h1>
            <p className="text-dark-300 mt-6 text-lg leading-relaxed">
              Chickita is a combination of two words "Chick" and "kita". "Chick" refers to Chicken, 
              while "kita" means us/we/our in Bahasa/Indonesian. Together, it represents our focus on 
              community, communal dining, and togetherness – a pillar of Asian culture.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Chef Asif Mehrudeen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute -bottom-8 -right-8 max-w-sm p-6 bg-dark-800 border border-dark-700 rounded-2xl shadow-xl">
                <blockquote className="text-white italic">
                  "I strongly believe that a successful concept is the one that carries the heart, 
                  passion & soul in all its food and services."
                </blockquote>
                <p className="text-primary-500 font-semibold mt-4">— Asif Mehrudeen, Founder</p>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Where The Journey <span className="gradient-text">Begins</span>
              </h2>
              <div className="mt-6 space-y-4 text-dark-300 leading-relaxed">
                <p>
                  Asif Mehrudeen, Founder of Chickita®, is an Australian with a heart full of passion 
                  for cooking. He had always dreamed of writing his own flame grilled chicken story.
                </p>
                <p>
                  The enthusiasm for cooking inspired him and the team to create this unique concept, 
                  with multiple stores successfully launched across Vietnam, Malaysia, and now in his 
                  home town of Melbourne!
                </p>
                <p>
                  Asif's culinary background of almost 20 years in Southeast Asia working as an 
                  Executive Chef across brands like the Park Hyatt or Bali's infamous Ku De Ta, and 
                  being married to an Indonesian lady, Eva, has inspired him to develop Chickita®.
                </p>
                <p>
                  This dining concept is an Australian-first, celebrating the very best Southeast 
                  Asian flavours, but also offering something new and flavourful!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Chickita® Is All About <span className="gradient-text">Good Things</span>
            </h2>
            <p className="text-dark-300 mt-4 max-w-2xl mx-auto">
              Good food, good service, good value, good health, and good times.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'We only serve 100% natural Australian chicken, flame-grilled to perfection',
              },
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every dish is crafted with passion and care by our dedicated team',
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'A welcoming space for families, friends, and communities to gather',
              },
              {
                icon: Globe,
                title: 'Asian Heritage',
                description: 'Authentic Southeast Asian flavours brought to Australian shores',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-dark-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Our <span className="gradient-text">Promise</span>
              </h2>
              <p className="text-dark-300 mt-6 text-lg leading-relaxed">
                At Chickita®, we're committed to delivering an exceptional dining experience 
                that brings together quality ingredients, authentic flavours, and warm hospitality.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  'We will only ever serve 100% natural Australian chicken',
                  'We only support cruelty-free chicken farming practices',
                  'Our chicken will always be flame-grilled to perfection',
                  'All our chicken is halal certified',
                  'We source fresh, local produce whenever possible',
                ].map((promise, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">{promise}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary-500 text-black font-semibold rounded-full hover:bg-primary-400 transition-colors"
              >
                Explore Our Menu
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Flame grilled chicken"
                className="rounded-2xl w-full aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Fresh ingredients"
                className="rounded-2xl w-full aspect-square object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Restaurant atmosphere"
                className="rounded-2xl w-full aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Signature sauces"
                className="rounded-2xl w-full aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Join The <span className="gradient-text">Team</span>
          </h2>
          <p className="text-dark-300 mt-4 text-lg">
            We are always looking for awesome people to work with us. If you're passionate 
            about food and customer service, we'd love to hear from you!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary-500 text-black font-semibold rounded-full hover:bg-primary-400 transition-colors"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
