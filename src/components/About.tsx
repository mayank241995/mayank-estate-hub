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
            About <span className="text-primary">Nanda Gokula Estates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Discover your dream plot at Nandagokula Estates—a luxury residential oasis in Bangalore. 
            Our meticulously planned community offers prime plots designed for those seeking peaceful 
            living with modern amenities and convenient connectivity.
          </p>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Premium Plots for Sale in Bangalore</h3>
            <p className="text-muted-foreground leading-relaxed">
              We offer carefully curated plots in various sizes and configurations to suit your unique vision. 
              From cozy family homes to sprawling estates, our eco-friendly community combines luxury with 
              sustainability, ensuring your investment contributes to both comfort and a greener future.
            </p>
          </div>
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