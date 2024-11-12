import { Award, Users, Star, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: Users, label: 'Happy Customers', value: '15K+' },
    { icon: Star, label: 'Expert Mechanics', value: '50+' },
    { icon: Briefcase, label: 'Services Completed', value: '30K+' }
  ];

  return (
    <section id="aboutus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80"
                  alt="Mechanic working"
                  className="rounded-2xl shadow-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1562351778-a451cb11dc90?auto=format&fit=crop&q=80"
                  alt="Auto diagnostic"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1630936262150-e987b4778d48?auto=format&fit=crop&q=80"
                  alt="Car service"
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&q=80"
                  alt="Car maintenance"
                  className="rounded-2xl shadow-lg h-64 w-full object-cover"
                />
              </div>
            </div>
            {/* Accent Elements */}
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-slate-900/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Your Trusted Partner in <span className="text-yellow-400">Auto Care</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1998, AutoCarePro has been delivering top-notch automotive services with unwavering commitment to quality and customer satisfaction. Our state-of-the-art facility and ASE-certified technicians ensure your vehicle receives the best care possible.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">Expert Team</h3>
                <p className="text-gray-600">ASE-certified mechanics with continuous training in latest automotive technologies.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">Modern Equipment</h3>
                <p className="text-gray-600">Advanced diagnostic tools and equipment for precise service delivery.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">Quality Parts</h3>
                <p className="text-gray-600">Only genuine OEM and high-quality aftermarket parts used.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">Fair Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden fees or unexpected charges.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-slate-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;