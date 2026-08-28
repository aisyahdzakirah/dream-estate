import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import PropertyTypes from "./components/PropertyTypes"
import WhyDreamEstate from "./components/WhyDreamEstate"
import CTA from "./components/CTA"

import Properties from "./pages/Properties"
import PropertyDetail from "./pages/PropertyDetail"
import Contact from "./pages/Contact"

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <WhyDreamEstate />
      <CTA />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/properties/:id"
            element={<PropertyDetail />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App