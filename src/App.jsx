import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsDistillation from './components/WhatIsDistillation'
import Types from './components/Types'
import TrayTypes from './components/TrayTypes'
import Products from './components/Products'
import Calculations from './components/Calculations'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
  const [modal, setModal] = useState(null)

  return (
    <div className="min-h-screen bg-white text-steel-900">
      <Navbar />
      <Hero />
      <WhatIsDistillation />
      <Types />
      <TrayTypes />
      <Products onOpen={setModal} />
      <Calculations />
      <Footer />
      {modal && <Modal data={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
