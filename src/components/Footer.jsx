export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-primary py-12 px-4 sm:px-6 lg:px-8 shadow-2xl shadow-red-600/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-red-500/60">
                <span className="text-white font-black text-lg">FIT</span>
              </div>
              <span className="text-white font-black text-lg bg-gradient">FitForce</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming lives through fitness and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#classes" className="hover:text-primary transition">Classes</a></li>
              <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Join Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 1-800-FIT-FORCE</li>
              <li>📧 info@fitforce.com</li>
              <li>📍 123 Fitness Ave, Sport City, SC 12345</li>
              <li>⏰ Mon-Fri: 5am-10pm | Sat-Sun: 6am-8pm</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition">
                <span className="text-primary">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition">
                <span className="text-primary">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition">
                <span className="text-primary">i</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition">
                <span className="text-primary">y</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-400 text-sm mb-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Hours</h4>
              <p>Monday - Friday: 5:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 6:00 AM - 8:00 PM</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Memberships</h4>
              <p>Basic • Premium • Elite</p>
              <p>Flexible billing options available</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Facilities</h4>
              <p>State-of-the-art equipment</p>
              <p>Professional trainers • Group classes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-primary/30">
            <p className="text-gray-500 text-sm">&copy; 2024 FitForce Gym. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
              <a href="#" className="hover:text-primary transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
