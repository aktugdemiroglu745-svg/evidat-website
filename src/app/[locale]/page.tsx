import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ShinyDemo from '@/components/ShinyDemo';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ShinyDemo />
        <About />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
