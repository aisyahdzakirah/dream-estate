import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import PropertyCard from "./PropertyCard"
import { properties } from "../data/properties"
import Reveal from "./Reveal"

function FeaturedProperties() {
  const featuredProperties = properties.filter(
    (property) => property.featured
  )

  return (
    <section
      id="properties"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
              Featured Properties
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl">
              Spaces you'll love
              <span className="font-serif italic font-normal text-[#C8A96B]">
                {" "}to call home.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#252525]/55">
              Explore our handpicked collection of beautiful properties
              selected for comfort, style, and quality.
            </p>
          </div>

          {/* View All Properties */}
          <Link
            to="/properties"
            className="group flex w-fit items-center gap-2 text-sm font-medium text-[#172033] transition hover:text-[#C8A96B]"
          >
            View all properties

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Property Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {featuredProperties.map((property) => (
            <Reveal key={property.id}>
              <PropertyCard property={property} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}

export default FeaturedProperties