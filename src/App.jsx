import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-neo-dark min-h-screen font-sans selection:bg-capsule-blue selection:text-neo-dark">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;