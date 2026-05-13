import { useState } from 'react'

export default function Services({ classes = [] }) {
  const [expandedClass, setExpandedClass] = useState(null)

  const defaultClasses = [
    { _id: '1', name: 'Strength Training', instructor: 'John Smith', schedule: { day: 'Monday', startTime: '06:00', endTime: '07:00' }, difficulty: 'Beginner', price: 50 },
    { _id: '2', name: 'HIIT Cardio', instructor: 'Sarah Johnson', schedule: { day: 'Tuesday', startTime: '17:00', endTime: '18:00' }, difficulty: 'Advanced', price: 60 },
    { _id: '3', name: 'Yoga & Flexibility', instructor: 'Mike Davis', schedule: { day: 'Wednesday', startTime: '18:00', endTime: '19:30' }, difficulty: 'Beginner', price: 40 },
    { _id: '4', name: 'CrossFit', instructor: 'Emma Wilson', schedule: { day: 'Thursday', startTime: '07:00', endTime: '08:00' }, difficulty: 'Intermediate', price: 70 }
  ]

  const displayClasses = classes.length > 0 ? classes : defaultClasses

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400'
      case 'Advanced': return 'bg-red-500/20 text-red-400'
      default: return 'bg-primary/20 text-primary'
    }
  }

  return (
    <section id="classes" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient text-3xl sm:text-4xl">
            OUR CLASSES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our diverse range of fitness classes designed to help you reach your goals efficiently and enjoyably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayClasses.map((gymClass) => (
            <div 
              key={gymClass._id}
              className="bg-gradient-to-br from-gray-950 to-black border-2 border-primary hover:border-accent rounded-lg p-6 transition duration-300 cursor-pointer hover:shadow-2xl hover:shadow-red-500/60 transform hover:scale-105"
              onClick={() => setExpandedClass(expandedClass === gymClass._id ? null : gymClass._id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{gymClass.name}</h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h15m-15 4v10" />
                    </svg>
                    Instructor: {gymClass.instructor}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-lg font-semibold ${getDifficultyColor(gymClass.difficulty)}`}>
                  {gymClass.difficulty}
                </span>
              </div>

              {gymClass.schedule && (
                <div className="text-sm text-gray-300 mb-4">
                  <p className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a2 2 0 012 2v2a2 2 0 11-4 0V9a2 2 0 012-2z" clipRule="evenodd" />
                    </svg>
                    {gymClass.schedule.day} • {gymClass.schedule.startTime} - {gymClass.schedule.endTime}
                  </p>
                </div>
              )}

              {expandedClass === gymClass._id && (
                <div className="mt-4 pt-4 border-t border-primary/30 animate-slideInDown">
                  <p className="text-gray-300 mb-4">
                    Join this intensive {gymClass.name} session. Perfect for those at {gymClass.difficulty} fitness level.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">${gymClass.price}</span>
                    <button className="btn-primary py-2 px-4">Enroll Now</button>
                  </div>
                </div>
              )}

              {expandedClass !== gymClass._id && (
                <div className="flex items-center justify-between pt-4 border-t border-primary/30">
                  <span className="text-primary font-bold text-xl">${gymClass.price}</span>
                  <span className="text-gray-400 text-sm">Click to expand</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
