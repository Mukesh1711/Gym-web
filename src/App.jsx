import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [classes, setClasses] = useState([])
  const [pricing, setPricing] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch classes and pricing from backend
    const fetchData = async () => {
      try {
        // Note: Update this URL to match your backend server
        const classesRes = await axios.get('http://localhost:5000/api/classes')
        const pricingRes = await axios.get('http://localhost:5000/api/pricing')
        
        setClasses(classesRes.data)
        setPricing(pricingRes.data)
      } catch (err) {
        console.log('Backend not running or no data available - using defaults')
        setError('Backend not available')
        // Set default data for demo purposes
        setClasses([
          { _id: '1', name: 'Strength Training', instructor: 'John Smith', schedule: { day: 'Monday', startTime: '06:00', endTime: '07:00' }, difficulty: 'Beginner', price: 50 },
          { _id: '2', name: 'HIIT Cardio', instructor: 'Sarah Johnson', schedule: { day: 'Tuesday', startTime: '17:00', endTime: '18:00' }, difficulty: 'Advanced', price: 60 },
          { _id: '3', name: 'Yoga & Flexibility', instructor: 'Mike Davis', schedule: { day: 'Wednesday', startTime: '18:00', endTime: '19:30' }, difficulty: 'Beginner', price: 40 },
          { _id: '4', name: 'CrossFit', instructor: 'Emma Wilson', schedule: { day: 'Thursday', startTime: '07:00', endTime: '08:00' }, difficulty: 'Intermediate', price: 70 }
        ])
        setPricing([
          { _id: '1', planName: 'Basic', monthlyPrice: 29, annualPrice: 290, features: ['Access to gym', 'Basic equipment', 'Email support'], description: 'Perfect for beginners' },
          { _id: '2', planName: 'Premium', monthlyPrice: 59, annualPrice: 590, features: ['All Basic features', 'Free classes', 'Personal trainer consultation', 'Priority support'], description: 'Most popular' },
          { _id: '3', planName: 'Elite', monthlyPrice: 99, annualPrice: 990, features: ['All Premium features', 'One-on-one coaching', 'Nutrition plan', '24/7 priority support'], description: 'For serious athletes' }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Services classes={classes} />
      <Pricing pricing={pricing} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
