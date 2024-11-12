import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'The team at AutoCarePro has been maintaining my company\'s fleet for years. Their service is unmatched, and they always go above and beyond.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    content: 'I appreciate their transparency and expertise. They explain everything clearly and never try to upsell unnecessary services.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'As someone who knows little about cars, I trust AutoCarePro completely. They\'re honest, reliable, and their work is exceptional.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-yellow-400/20" />
              
              {/* Content */}
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Customer Satisfaction', value: '99%' },
            { label: 'Return Customers', value: '95%' },
            { label: 'Years of Service', value: '25+' },
            { label: 'Five-Star Reviews', value: '1000+' }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;