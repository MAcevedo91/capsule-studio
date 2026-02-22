import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'


function App() {
  return (
    <div className="bg-neo-dark min-h-screen font-sans selection:bg-capsule-blue selection:text-neo-dark">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App;