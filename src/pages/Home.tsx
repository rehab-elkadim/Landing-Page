import Header from '../components/Header';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Community from '@/components/Community';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className= 'text-sans gap-[27.84px] '>
      <Header />
      <Hero />
      <Clients />
      <Community/>
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
