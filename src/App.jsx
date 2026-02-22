import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'
import Portafolio from './components/Portafolio'
import Portfolio from './components/Portafolio';


function App() {
  return (
    <div className="bg-neo-dark min-h-screen font-sans selection:bg-capsule-blue selection:text-neo-dark">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </div>
  )
}

export default App;