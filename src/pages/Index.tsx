import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Properties />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <FloatingButtons />
      <Footer />
    </main>
  );
};

export default Index;
