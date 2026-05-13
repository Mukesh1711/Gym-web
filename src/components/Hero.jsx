export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark via-black to-dark min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Vibrant red glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-slideInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient drop-shadow-xl">
            BUILD YOUR DREAM BODY
          </h1>
        </div>
        
        <div className="animate-slideInUp">
          <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Join FitForce Gym and transform your life with our state-of-the-art equipment, expert trainers, and supportive community. We're committed to helping you achieve your fitness goals.
          </p>
        </div>

        <div className="animate-fadeIn flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto transform transition hover:scale-110">
            Start Your Journey
          </button>
          <a
            href="https://www.youtube.com/@masterLeeYT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center inline-block"
          >
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary/30">
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-gray-400">Professional Trainers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-400">Classes Weekly</p>
          </div>
        </div>
      </div>
    </section>
  )
}
