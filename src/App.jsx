import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./sections/Hero";
import ImageCarousel from "./sections/ImageCarousel";
import About from "./sections/About";
import Mission from "./sections/Mission";
import Courses from "./sections/Courses";
import Activities from "./sections/Activities";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ImageCarousel />
        <Hero />
        <About />
        <Mission />
        <Courses />
        <Activities />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
       <Footer />
    </>
  );
}

export default App;