import React, { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default page reload

    // Your specific Formspree endpoint is now included here
    const formspreeEndpoint = 'https://formspree.io/f/myzwqnbb'

    const form = e.target as HTMLFormElement
    const data = new FormData(form) // FormData will use the 'name' attributes from your input fields

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json', // Important for Formspree to reply with JSON
        },
      })

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' }) // Clear the form fields
      } else {
        // Try to get a more specific error message from Formspree
        response.json().then((data) => {
          if ('errors' in data) {
            alert(
              `Oops! There was a problem: ${data.errors.map((error: any) => error.message).join(', ')}`,
            )
          } else {
            alert('Oops! There was a problem submitting your form.')
          }
        }).catch(() => {
            alert('Oops! There was a problem submitting your form, and we could not parse the error details.');
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form. Please try again.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with our research team for collaboration or inquiries
            about CNN robustness in medical imaging
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              We welcome collaboration opportunities, questions about our
              adversarial attack research, and discussions about medical imaging
              security applications.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <MailIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">defxnetsolutions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+94 (76) 17 32 149</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 p-3 rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Cyber Security Department
                    <br />
                    Sri Lanka Institute of Information Technology
                    <br />
                    SLIIT Malabe Campus, New Kandy Rd, Malabe. Sri lanka.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="Your message about CNN robustness research..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <SendIcon className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}