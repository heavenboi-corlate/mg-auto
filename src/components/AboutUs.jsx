import { Gallery } from "./ui";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1632583824020-1c71cc0ce7c4?q=80&w=1200",
    alt: "Modern Auto Workshop",
    caption: "State-of-the-art diagnostic equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1630026317249-c1c68c8bdf04?q=80&w=1200",
    alt: "Expert Mechanics",
    caption: "Our team of certified mechanics"
  },
  {
    url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200",
    alt: "Premium Service",
    caption: "Premium service for luxury vehicles"
  },
  {
    url: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200",
    alt: "Customer Service",
    caption: "Dedicated customer service"
  }
];

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About MG Auto</h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          With over 15 years of experience, we provide top-tier automotive services
          with a commitment to excellence and customer satisfaction.
        </p>
        
        {/* Gallery Section */}
        <div className="mb-16">
          <Gallery images={galleryImages} />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our certified mechanics bring years of experience and expertise to every job.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Modern Equipment</h3>
            <p className="text-gray-600">
              We use the latest diagnostic and repair equipment to ensure precise service.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quality Service</h3>
            <p className="text-gray-600">
              We pride ourselves on delivering consistent, high-quality service.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, with transparent communication throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
