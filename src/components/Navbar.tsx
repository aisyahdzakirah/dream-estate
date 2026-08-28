import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === "/"

  const navClass =
    scrolled || !isHome
      ? "bg-[#F8F6F1]/90 text-[#172033] shadow-sm backdrop-blur-xl"
      : "bg-transparent text-white"

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="group">
          <div className="text-xl font-semibold tracking-tight">
            Dream<span className="text-[#C8A96B]">Estate</span>
          </div>

          <p
            className={`mt-0.5 text-[8px] uppercase tracking-[0.3em] transition ${
              scrolled || !isHome
                ? "text-[#172033]/40"
                : "text-white/45"
            }`}
          >
            Find your place
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {/* HOME */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-sm transition hover:text-[#C8A96B]"
          >
            Home
          </button>

          {/* PROPERTIES */}
          <Link
            to="/properties"
            className="text-sm transition hover:text-[#C8A96B]"
          >
            Properties
          </Link>

          {/* COLLECTIONS */}
          <button
            type="button"
            onClick={() => scrollToSection("collections")}
            className="text-sm transition hover:text-[#C8A96B]"
          >
            Collections
          </button>

          {/* ABOUT */}
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-sm transition hover:text-[#C8A96B]"
          >
            About
          </button>

        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-full bg-[#C8A96B] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#b7965b] md:flex"
        >
          Let's talk

          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled || !isHome
              ? "bg-white text-[#172033]"
              : "bg-white/10 text-white backdrop-blur-md"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#172033]/10 bg-[#F8F6F1] px-6 py-6">

          <nav className="flex flex-col gap-5">

            {/* HOME */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-left text-sm text-[#172033]"
            >
              Home
            </button>

            {/* PROPERTIES */}
            <Link
              to="/properties"
              className="text-sm text-[#172033]"
            >
              Properties
            </Link>

            {/* COLLECTIONS */}
            <button
              type="button"
              onClick={() => scrollToSection("collections")}
              className="text-left text-sm text-[#172033]"
            >
              Collections
            </button>

            {/* ABOUT */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-left text-sm text-[#172033]"
            >
              About
            </button>

            {/* LET'S TALK */}
            <Link
              to="/contact"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C8A96B] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#172033]"
            >
              Let's talk

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </nav>

        </div>
      </div>
    </header>
  )
}

export default Navbar