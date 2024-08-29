'use client';

import LandingPage from '@/components/LandingPage/LandingPage';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage color="red-600" loc="Home" />
      <About color="gray-300" loc="About" />
      <Projects color="red-600" loc="Projects" />
      <Contact color="gray-300" loc="Contact" />
      <Footer />
    </>
  );
}

export default Home;
