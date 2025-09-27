import { Home, DollarSign, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Home,
      title: "Trusted Listings",
      description: "Verified properties with complete documentation and legal clearance for your peace of mind."
    },
    {
      icon: DollarSign, 
      title: "Easy Financing",
      description: "Flexible payment plans and partnerships with leading banks for hassle-free home loans."
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Properties in the most sought-after neighborhoods with excellent connectivity and amenities."
    }
  ];

  return (
    <section className="py-20 navy-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-primary">Mayank Real Estate</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience the difference with our professional approach and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center text-white group">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-white/80 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;