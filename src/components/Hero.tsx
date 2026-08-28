import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Search,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()

  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("All Properties")
  const [typeOpen, setTypeOpen] = useState(false)

  const typeRef = useRef<HTMLDivElement>(null)

  const propertyTypes = [
    "All Properties",
    "House",
    "Villa",
    "Apartment",
    "Estate",
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeRef.current &&
        !typeRef.current.contains(event.target as Node)
      ) {
        setTypeOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Search
  const handleSearch = () => {
    const params = new URLSearchParams()

    if (location.trim()) {
      params.set("location", location.trim())
    }

    if (propertyType !== "All Properties") {
      params.set("type", propertyType)
    }

    const query = params.toString()

    navigate(query ? `/properties?${query}` : "/properties")
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F6F1]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="relative z-10">

          {/* Small Label */}
          <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
            <span className="h-px w-8 bg-[#C8A96B]" />
            Find your place
          </p>

          {/* Heading */}
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172033] sm:text-6xl lg:text-7xl">
            Find a place that

            <span className="block font-serif italic font-normal text-[#C8A96B]">
              feels like home.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-lg text-base leading-7 text-[#252525]/60 sm:text-lg">
            Discover beautiful homes, explore unique properties,
            and find a space that matches the way you want to live.
          </p>

          {/* =================================================
              SEARCH BOX
          ================================================= */}

          <div className="relative z-30 mt-9 rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/5">

            <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">

              {/* ================= LOCATION ================= */}

              <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F8F6F1]">

                <MapPin
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#C8A96B]"
                />

                <div className="min-w-0 flex-1">

                  <p className="text-xs font-medium text-[#252525]/50">
                    Location
                  </p>

                  <input
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSearch()
                      }
                    }}
                    placeholder="Jakarta, Indonesia"
                    className="mt-1 w-full bg-transparent text-sm font-medium text-[#172033] outline-none placeholder:text-[#172033]/40"
                  />

                </div>

              </div>

              {/* ================= PROPERTY TYPE ================= */}

              <div
                ref={typeRef}
                className="relative"
              >

                {/* Selected Type */}
                <button
                  type="button"
                  onClick={() =>
                    setTypeOpen((current) => !current)
                  }
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-[#F8F6F1]"
                >

                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-base">
                    🏠
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">

                    <p className="text-xs font-medium text-[#252525]/50">
                      Property Type
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-[#172033]">
                      {propertyType}
                    </p>

                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    size={16}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#172033]/60 transition-transform duration-300 ${
                      typeOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* ================= CUSTOM DROPDOWN ================= */}

                <div
                  className={`absolute left-0 right-0 top-[calc(100%+10px)] z-50 origin-top rounded-2xl border border-black/5 bg-white p-2 shadow-[0_20px_50px_rgba(23,32,51,0.15)] transition-all duration-200 ${
                    typeOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0"
                  }`}
                >

                  {propertyTypes.map((type) => {
                    const selected = propertyType === type

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setPropertyType(type)
                          setTypeOpen(false)
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                          selected
                            ? "bg-[#F8F6F1] font-medium text-[#C8A96B]"
                            : "text-[#172033] hover:bg-[#F8F6F1]"
                        }`}
                      >

                        <span>
                          {type}
                        </span>

                        {selected && (
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="text-[#C8A96B]"
                          />
                        )}

                      </button>
                    )
                  })}

                </div>

              </div>

              {/* ================= SEARCH BUTTON ================= */}

              <button
                type="button"
                onClick={handleSearch}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#27324a]"
              >

                <Search
                  size={18}
                  strokeWidth={1.8}
                />

                Search

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </div>

          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div className="mt-8 flex gap-8">

            <div>
              <p className="text-2xl font-semibold text-[#172033]">
                2.4K+
              </p>

              <p className="mt-1 text-xs text-[#252525]/50">
                Properties
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#172033]">
                850+
              </p>

              <p className="mt-1 text-xs text-[#252525]/50">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#172033]">
                98%
              </p>

              <p className="mt-1 text-xs text-[#252525]/50">
                Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}

        <div className="relative z-10">

          {/* Decorative Shape */}
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#C8A96B]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl">

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Modern luxury house"
              className="h-125 w-full object-cover transition duration-700 hover:scale-105 lg:h-155"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-md">

              <div className="flex items-center justify-between gap-5">

                {/* Property Info */}
                <div>

                  <p className="text-xs uppercase tracking-wider text-[#252525]/50">
                    Featured Property
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#172033]">
                    Modern Villa
                  </h3>

                  <p className="mt-1 text-sm text-[#252525]/50">
                    Jakarta Selatan
                  </p>

                </div>

                {/* Price */}
                <div className="shrink-0 text-right">

                  <p className="text-lg font-semibold text-[#172033]">
                    Rp 4.8 M
                  </p>

                  <Link
                    to="/properties/1"
                    className="group mt-2 flex items-center justify-end gap-1 text-xs font-medium text-[#C8A96B] transition hover:text-[#172033]"
                  >
                    View property

                    <ArrowRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero