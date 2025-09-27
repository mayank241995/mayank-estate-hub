import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Happy Homeowner",
      image: "👩‍💼",
      rating: 5,
      text: "Mayank Real Estate made our home buying journey incredibly smooth. Their team was professional, knowledgeable, and always available to answer our questions. We found our dream home within our budget!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "👨‍💼",
      rating: 5,
      text: "I've worked with many real estate agencies, but Mayank Real Estate stands out for their transparency and market expertise. They helped me build a profitable property portfolio."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      image: "👩‍🎓",
      rating: 5,
      text: "As a first-time buyer, I was nervous about the process. The team at Mayank Real Estate guided me through every step and made sure I understood everything. Highly recommended!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card text-center">
            {/* Client Image */}
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              {currentTestimonial.image}
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h4>
              <p className="text-muted-foreground">{currentTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;