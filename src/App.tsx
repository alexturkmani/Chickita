import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import About from './pages/About'
import Order from './pages/Order'
import Contact from './pages/Contact'
import Sauces from './pages/Sauces'
import Functions from './pages/Functions'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sauces" element={<Sauces />} />
          <Route path="/functions" element={<Functions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
