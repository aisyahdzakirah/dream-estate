import { Heart, MapPin, BedDouble, Bath, Maximize, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Property } from "../data/properties"

type PropertyCardProps = {
  property: Property
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">

      {/* Image */}
      <Link
        to={`/properties/${property.id}`}
        className="relative block h-72 overflow-hidden"
      >
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Type */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#172033] backdrop-blur-md">
            {property.type}
          </span>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Save ${property.title}`}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#172033] backdrop-blur-md transition hover:bg-[#172033] hover:text-white"
        >
          <Heart
            size={18}
            strokeWidth={1.7}
          />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-lg bg-[#172033]/90 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md">
            {property.priceLabel}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">

        {/* Property Title */}
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-lg font-semibold text-[#172033] transition-colors duration-300 hover:text-[#C8A96B]">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-sm text-[#252525]/50">
          <MapPin
            size={15}
            strokeWidth={1.7}
          />

          <span>
            {property.location}
          </span>
        </div>

        {/* Details */}
        <div className="mt-5 flex items-center gap-5 border-t border-black/5 pt-4">

          <div className="flex items-center gap-1.5 text-xs text-[#252525]/60">
            <BedDouble
              size={16}
              strokeWidth={1.6}
            />

            <span>
              {property.bedrooms} Beds
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#252525]/60">
            <Bath
              size={16}
              strokeWidth={1.6}
            />

            <span>
              {property.bathrooms} Baths
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#252525]/60">
            <Maximize
              size={16}
              strokeWidth={1.6}
            />

            <span>
              {property.area} m²
            </span>
          </div>

        </div>

        {/* View Property */}
        <Link
          to={`/properties/${property.id}`}
          className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm font-medium text-[#172033]"
        >
          <span className="transition-colors duration-300 group-hover:text-[#C8A96B]">
            Lihat properti
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F6F1] transition-all duration-300 group-hover:bg-[#C8A96B] group-hover:text-white">
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Link>

      </div>
    </article>
  )
}

export default PropertyCard