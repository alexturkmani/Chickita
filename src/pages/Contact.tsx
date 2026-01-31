import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  subscribe: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 mt-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or enquiry? We'd love to hear from you! 
            Our friendly team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:0395965473" 
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">Phone</h4>
                      <p className="text-gray-600 text-sm">03 9596 5473</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:flame@chickita.com.au" 
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">Email</h4>
                      <p className="text-gray-600 text-sm">flame@chickita.com.au</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Locations */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Locations</h3>
                
                <div className="space-y-4">
                  {[
                    { name: 'Port Melbourne', address: 'Bay Street, Port Melbourne VIC 3207', isNew: true },
                    { name: 'Maribyrnong', address: 'Level 3, Highpoint Shopping Centre, VIC 3032' },
                    { name: 'Point Cook', address: 'Main Street, Point Cook VIC 3030', isNew: true },
                    { name: 'Clyde', address: '6/21 St Germain Blvd, Clyde North VIC 3978', isNew: true },
                  ].map((location) => (
                    <div key={location.name} className="flex items-start gap-3">
                      <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-gray-900 font-medium">
                          {location.name}
                          {location.isNew && (
                            <span className="ml-2 px-2 py-0.5 bg-primary-500 text-white text-xs rounded-full">NEW</span>
                          )}
                        </h4>
                        <p className="text-gray-600 text-sm">{location.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/locations"
                  className="inline-block mt-4 text-primary-500 hover:text-primary-400 transition-colors font-medium text-sm"
                >
                  View All Locations →
                </Link>
              </div>
              
              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Opening Hours</h3>
                
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">10:30am - 10:00pm</p>
                    <p className="text-gray-600 text-sm">7 days a week*</p>
                    <p className="text-gray-500 text-xs mt-2">*Except Christmas Day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon.</p>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                          subscribe: false,
                        })
                      }}
                      className="text-primary-500 hover:text-primary-400 transition-colors font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-900 font-medium mb-2">
                          First Name <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-900 font-medium mb-2">
                          Last Name <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                          Email <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                          Phone <span className="text-primary-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-900 font-medium mb-2">
                        Subject <span className="text-primary-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Request</option>
                        <option value="functions">Functions & Events</option>
                        <option value="franchise">Franchise Opportunity</option>
                        <option value="careers">Careers / Join the Team</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                        Message <span className="text-primary-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-gray-300 bg-gray-50 text-primary-500 focus:ring-primary-500"
                      />
                      <label htmlFor="subscribe" className="text-gray-600">
                        Sign up for news and updates from Chickita
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900">
            We Value Your <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-gray-600 mt-4">
            If you enjoyed your experience at Chickita®, please consider leaving us a Google Review. 
            Your feedback helps us improve and serve you better!
          </p>
          <a
            href="https://g.page/r/CS868zB3H2dNEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-dark-900 font-semibold rounded-full hover:bg-cream-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a Google Review
          </a>
        </div>
      </section>
    </div>
  )
}
