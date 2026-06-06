import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsDistillation from './components/WhatIsDistillation'
import Types from './components/Types'
import TrayTypes from './components/TrayTypes'
import Products from './components/Products'
import TechSpecs from './components/TechSpecs'
import Calculations from './components/Calculations'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-steel-900">
      <Navbar />
      <Hero />
      <WhatIsDistillation />
      <Types />
      <TrayTypes />
      <Products />
      <TechSpecs />
      <Calculations />
      <Footer />
    </div>
  )
}
