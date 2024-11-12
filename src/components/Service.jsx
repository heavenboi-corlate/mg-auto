import { 
  Wrench, 
  Battery, 
  Gauge, 
  PaintBucket, 
  Cog, 
  Thermometer,
  Sparkles,
  AlertCircle
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'General Repair',
    description: 'Comprehensive repair services for all vehicle makes and models with state-of-the-art diagnostic equipment.',
    price: 'From $89'
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery testing, replacement, and electrical system diagnostics to keep your vehicle starting strong.',
    price: 'From $45'
  },
  {
    icon: Gauge,
    title: 'Brake Service',
    description: 'Complete brake system inspection, repair, and replacement services for your safety.',
    price: 'From $129'
  },
  {
    icon: PaintBucket,
    title: 'Oil Change',
    description: 'Professional oil change service using premium synthetic oils and OEM filters.',
    price: 'From $49'
  },
  {
    icon: Cog,
    title: 'Transmission',
    description: 'Transmission diagnostic, maintenance, and repair services to ensure smooth operation.',
    price: 'From $199'
  },
  {
    icon: Thermometer,
    title: 'A/C Service',
    description: 'Complete air conditioning system diagnosis, repair, and recharge services.',
    price: 'From $89'
  },
  {
    icon: Sparkles,
    title: 'Detailing',
    description: 'Professional interior and exterior detailing services to restore your vehicle\'s appearance.',
    price: 'From $149'
  },
  {
    icon: AlertCircle,
    title: 'Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve complex vehicle issues.',
    price: 'From $79'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Professional <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive auto care services delivered by certified technicians using state-of-the-art equipment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-semibold">{service.price}</span>
                <button className="text-slate-900 font-semibold hover:text-yellow-400 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95">
            Schedule Service Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;