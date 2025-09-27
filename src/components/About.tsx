import { Target, Star, Handshake } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional real estate services and help families find their perfect homes with transparency and trust."
    },
    {
      icon: Star,
      title: "Our Vision",
      description: "To be the leading real estate company known for innovation, integrity, and outstanding customer satisfaction."
    },
    {
      icon: Handshake,
      title: "Our Trust",
      description: "Built on years of experience and thousands of satisfied customers who trust us with their most important investments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Mayank Real Estate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in the real estate industry, we have established ourselves 
            as a trusted partner for property buyers, sellers, and investors. Our commitment to excellence 
            and personalized service has helped thousands of families find their dream homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;