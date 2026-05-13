import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'Basic',
    age: '',
    gender: '',
    goal: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Try to submit to backend
      await axios.post('http://localhost:5000/api/members', formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        membershipType: 'Basic',
        age: '',
        gender: '',
        goal: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Submission error:', err)
      setError('Failed to submit form. Please try again.')
      setTimeout(() => setError(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient text-3xl sm:text-4xl">
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sign up today and start your transformation. Our team is ready to support your fitness journey.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-950 to-black border-2 border-primary hover:border-accent rounded-lg p-8 sm:p-12 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/50 transition">
          {submitted ? (
            <div className="text-center py-12 animate-slideInDown">
              <svg className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
              <p className="text-gray-400">
                Thank you for signing up! We've received your information and will be in touch soon with your membership details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                    placeholder="25"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                  >
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Membership Type</label>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                  >
                    <option value="Basic">Basic - $29/mo</option>
                    <option value="Premium">Premium - $59/mo</option>
                    <option value="Elite">Elite - $99/mo</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Fitness Goal</label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black border-2 border-primary hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition shadow-sm hover:shadow-md hover:shadow-red-500/30"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 mb-6 text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-6 rounded-lg hover:shadow-2xl hover:shadow-red-500/60 transform hover:scale-105 transition duration-300 drop-shadow-lg disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? 'Submitting...' : 'Start My Journey'}
              </button>

              <p className="text-gray-400 text-sm text-center mt-4">
                We respect your privacy. Check out our privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
