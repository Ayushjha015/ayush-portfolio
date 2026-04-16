/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Chatbot />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
