import { useState } from 'react'

export default function Pricing({ pricing = [] }) {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const defaultPricing = [
    { 
      _id: '1', 
      planName: 'Basic', 
      monthlyPrice: 29, 
      annualPrice: 290, 
      features: ['Access to gym', 'Basic equipment', 'Email support'], 
      description: 'Perfect for beginners' 
    },
    { 
      _id: '2', 
      planName: 'Premium', 
      monthlyPrice: 59, 
      annualPrice: 590, 
      features: ['All Basic features', 'Free classes', 'Personal trainer consultation', 'Priority support'], 
      description: 'Most popular' 
    },
    { 
      _id: '3', 
      planName: 'Elite', 
      monthlyPrice: 99, 
      annualPrice: 990, 
      features: ['All Premium features', 'One-on-one coaching', 'Nutrition plan', '24/7 priority support'], 
      description: 'For serious athletes' 
    }
  ]

  const displayPricing = pricing.length > 0 ? pricing : defaultPricing

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient text-3xl sm:text-4xl">
            PRICING PLANS
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include gym access and facilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`${billingCycle === 'monthly' ? 'text-primary font-bold' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-primary/20 border-2 border-primary"
            >
              <span 
                className={`inline-block h-6 w-6 transform rounded-full bg-primary transition ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`${billingCycle === 'annual' ? 'text-primary' : 'text-gray-400'}`}>Annual (Save 17%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPricing.map((plan, index) => (
            <div 
              key={plan._id}
              className={`rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 ${
                index === 1 
                  ? 'ring-3 ring-accent scale-105 shadow-2xl shadow-red-500/80 border-2 border-primary' 
                  : 'bg-gray-950 border-2 border-primary/40 hover:border-primary hover:shadow-xl hover:shadow-red-500/40'
              } bg-gradient-to-b from-gray-950 to-black`}
            >
              {index === 1 && (
                <div className="bg-gradient-to-r from-primary to-accent text-white py-3 text-center font-black text-lg">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.planName}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-primary">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.annualPrice / 12)}
                  </span>
                  <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-accent mt-2">${plan.annualPrice}/year</p>
                  )}
                </div>

                <button className={`w-full font-bold py-3 rounded-lg mb-8 transition duration-300 ${
                  index === 1 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}>
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features && plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 border-2 border-primary/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">First Month 50% OFF</h3>
          <p className="text-gray-400 mb-6">Sign up now and get 50% discount on your first month. Use code: FITFORCE50</p>
          <button className="btn-primary">Claim Offer</button>
        </div>
      </div>
    </section>
  )
}
