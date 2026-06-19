import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"



function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <NavBar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App