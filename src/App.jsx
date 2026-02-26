import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'
import Nosotros from './components/Nosotros';
// import Portfolio from './components/Portfolio';
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="bg-neo-dark min-h-screen font-sans selection:bg-capsule-blue selection:text-neo-dark">
      <Navbar />
      <Hero />
      <Services />
      <Nosotros />
      {/* <Portfolio /> */}
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;