'use client'

import { useState } from 'react'
import { FORMSPREE_URL, FORM_NAME } from '../config/form.config'
import Image from 'next/image'

const heroImages = [
  { src: '/images/invisible-grill.webp?size=200w200h', alt: 'Invisible stainless steel grills closeup' },
  { src: '/images/stainless-steel-invisible-grill.jpg?size=200w200h', alt: 'Durable stainless-steel invisible grills' },
  { src: '/images/invisible-grill-for-balcony.webp', alt: 'Anti-bird invisible grills in tellapur hyderabad' },
]

export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    purpose: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone)')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      // Send to Formspree
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.message,
          _subject: `${FORM_NAME} - New Enquiry from ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', purpose: '', email: '', phone: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send enquiry. Please try again or contact directly.')
      console.error('Form submission error:', error)
    }
  }

  return (
  <div id="quote" className='flex gap-4 px-4 bg-orange-100 py-6 rounded-lg shadow-sm flex-col lg:flex-row'>
  

    <div className="block sm:hidden bg-white border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          name="purpose" 
          placeholder="Purpose (Invisible Grill / Safety Net / Bird Net)" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.purpose}
          onChange={handleChange}
        />
        <input 
          name="email" 
          type="email"
          placeholder="Email *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          name="phone" 
          placeholder="Phone *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder="Message (optional)" 
          className="col-span-1 sm:col-span-2 border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        {/* Status messages */}
        {status === 'success' && (
          <div className="col-span-1 sm:col-span-2 p-3 bg-green-100 border border-green-400 rounded text-green-700">
            ✓ Enquiry sent successfully! We'll contact you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="col-span-1 sm:col-span-2 p-3 bg-red-100 border border-red-400 rounded text-red-700">
            ✗ {errorMessage}
          </div>
        )}

        <div className="col-span-1 sm:col-span-2">
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </form>
    </div>

    <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 sm:block hidden rounded-2xl p-8 shadow-lg">

  <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Get a Free Quote
  </h3>

  <form
    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
    onSubmit={handleSubmit}
  >
    <input
      name="name"
      placeholder="Full Name *"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <input
      name="purpose"
      placeholder="Purpose (Balcony / Bird Net / Safety)"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      value={formData.purpose}
      onChange={handleChange}
    />

    <input
      name="email"
      type="email"
      placeholder="Email Address *"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <input
      name="phone"
      placeholder="Phone Number *"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      value={formData.phone}
      onChange={handleChange}
      required
    />

    <textarea
      name="message"
      placeholder="Tell us about your requirement..."
      className="col-span-1 sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
      rows={4}
      value={formData.message}
      onChange={handleChange}
    ></textarea>

    {/* Status messages */}
    {status === "success" && (
      <div className="col-span-1 sm:col-span-2 p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
        ✓ Enquiry sent successfully! Our team will contact you shortly.
      </div>
    )}

    {status === "error" && (
      <div className="col-span-1 sm:col-span-2 p-4 bg-red-50 border border-red-300 rounded-lg text-red-600 text-sm">
        ✗ {errorMessage}
      </div>
    )}

    <div className="col-span-1 sm:col-span-2">
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </div>
  </form>
</div>
  
  <div className="h-90 sm:h-90 w-full overflow-hidden relative bg-gray-100 sm:block hidden">
  <Image
    src={heroImages[2].src}
    alt={heroImages[2].alt}
    fill
    priority
    className="object-cover rounded-lg"
    
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-lg" />

  {/* Center Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    
    <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
      Premium Invisible Grills
    </h2>

    <p className="mt-4 text-white text-lg sm:text-xl font-medium drop-shadow-md">
      17 Years Warranty • 304 Grade SS Wire • Child & Bird Safety
    </p>

  </div>
</div>
    </div>
  )
}
