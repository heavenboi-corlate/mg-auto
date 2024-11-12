
import { Shield, Clock, Wrench, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://unsplash.com/photos/classic-blue-coupe-scale-model-fyoGx76Cm7E?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional Auto Care You Can <span className="text-yellow-400">Trust</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Expert maintenance and repair services to keep your vehicle running at peak performance. Experience the difference of certified technicians and state-of-the-art diagnostics.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95">
                Book Service Now
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all hover:shadow-lg">
                View Services
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <Shield className="w-10 h-10 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white">Certified Experts</h3>
                  <p className="text-sm text-gray-400">ASE Certified Team</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-10 h-10 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white">Quick Service</h3>
                  <p className="text-sm text-gray-400">Same Day Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-10 h-10 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white">Modern Tools</h3>
                  <p className="text-sm text-gray-400">Latest Equipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Service</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Vehicle Make & Model"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Service Type"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <button className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-95">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;