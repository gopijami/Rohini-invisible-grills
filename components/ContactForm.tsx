'use client'

import { useState } from 'react'
import { FORMSPREE_URL, FORM_NAME } from '../config/form.config'

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
    <div className="bg-white border rounded-lg p-6 shadow-sm">
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
          placeholder="Purpose" 
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
  )
}
