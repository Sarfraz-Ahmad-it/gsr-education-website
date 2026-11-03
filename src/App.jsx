import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Mission from "./sections/Mission";
import Courses from "./sections/Courses";
import Activities from "./sections/Activities";
import Gallery from "./sections/Gallery";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Mission />
        <Courses />
        <Activities />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default App;