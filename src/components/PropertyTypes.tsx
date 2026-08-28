import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import Reveal from "./Reveal"

const propertyTypes = [
  {
    name: "House",
    label: "Rumah",
    count: "1,240 Properties",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
    link: "/properties?type=House",
  },
  {
    name: "Villa",
    label: "Vila",
    count: "580 Properties",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    link: "/properties?type=Villa",
  },
  {
    name: "Apartment",
    label: "Apartemen",
    count: "720 Properties",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    link: "/properties?type=Apartment",
  },
  {
    name: "Estate",
    label: "Perkebunan",
    count: "340 Properties",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
    link: "/properties",
  },
]

function PropertyTypes() {
  return (
    <section
      id="collections"
      className="bg-[#F8F6F1] px-6 py-24 lg:px-8"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
              Explore
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl">
              Find the right space
              <span className="font-serif italic font-normal text-[#C8A96B]">
                {" "}for your lifestyle.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#252525]/55">
              From cozy family homes to sophisticated city apartments,
              discover a property that fits the way you live.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {propertyTypes.map((type) => (
              <Link
                key={type.name}
                to={type.link}
                className="group relative block h-90 overflow-hidden rounded-2xl"
              >
                {/* Image */}
                <img
                  src={type.image}
                  alt={type.label}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#172033]/90 via-[#172033]/20 to-transparent transition duration-500 group-hover:from-[#172033]/95" />

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#172033] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C8A96B] group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">

                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {type.count}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {type.label}
                  </h3>

                  {/* Animated line */}
                  <div className="mt-3 h-px w-0 bg-[#C8A96B] transition-all duration-500 group-hover:w-full" />

                  {/* View properties */}
                  <div className="mt-3 max-h-0 overflow-hidden text-xs font-medium uppercase tracking-[0.15em] text-white/0 transition-all duration-500 group-hover:max-h-6 group-hover:text-white/70">
                    View properties
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  )
}

export default PropertyTypes