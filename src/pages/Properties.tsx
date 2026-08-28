import { useMemo, useState } from "react"
import {
  ArrowDownUp,
  ArrowRight,
  BedDouble,
  Bath,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Square,
  X,
} from "lucide-react"
import { Link } from "react-router-dom"
import { properties } from "../data/properties"

type FilterType = "All" | "House" | "Villa" | "Apartment"
type PriceRange = "all" | "under-2" | "2-4" | "above-4"

function Properties() {
  const [search, setSearch] = useState("")
  const [activeType, setActiveType] = useState<FilterType>("All")
  const [sort, setSort] = useState("default")
  const [favorites, setFavorites] = useState<number[]>([])

  // More Filters
  const [showFilters, setShowFilters] = useState(false)
  const [minBedrooms, setMinBedrooms] = useState(0)
  const [priceRange, setPriceRange] = useState<PriceRange>("all")

  const filteredProperties = useMemo(() => {
    let result = [...properties]

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase().trim()

      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(keyword) ||
          property.location.toLowerCase().includes(keyword) ||
          property.city.toLowerCase().includes(keyword) ||
          property.type.toLowerCase().includes(keyword),
      )
    }

    // Property Type
    if (activeType !== "All") {
      result = result.filter(
        (property) => property.type === activeType,
      )
    }

    // Bedrooms
    if (minBedrooms > 0) {
      result = result.filter(
        (property) => property.bedrooms >= minBedrooms,
      )
    }

    // Price Range
    if (priceRange === "under-2") {
      result = result.filter(
        (property) => property.price < 2_000_000_000,
      )
    }

    if (priceRange === "2-4") {
      result = result.filter(
        (property) =>
          property.price >= 2_000_000_000 &&
          property.price <= 4_000_000_000,
      )
    }

    if (priceRange === "above-4") {
      result = result.filter(
        (property) => property.price > 4_000_000_000,
      )
    }

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [
    search,
    activeType,
    sort,
    minBedrooms,
    priceRange,
  ])

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  const clearFilters = () => {
    setSearch("")
    setActiveType("All")
    setSort("default")
    setMinBedrooms(0)
    setPriceRange("all")
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* Hero */}
      <section className="px-6 pb-12 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C8A96B]">
              Properties
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-[#172033] sm:text-6xl lg:text-7xl">
              Discover a place
              <br />
              <span className="font-serif italic font-normal text-[#C8A96B]">
                worth calling home.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#252525]/55">
              Explore thoughtfully selected homes, villas, and
              apartments designed around the way you want to live.
            </p>
          </div>

          {/* Search */}
          <div className="mt-12 rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(23,32,51,0.08)]">
            <div className="flex flex-col gap-3 lg:flex-row">

              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={20}
                  strokeWidth={1.6}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#172033]/40"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search by city, property name..."
                  className="h-14 w-full rounded-xl bg-[#F8F6F1] pl-14 pr-12 text-sm text-[#172033] outline-none placeholder:text-[#172033]/35 focus:ring-1 focus:ring-[#C8A96B]"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-[#172033]/40 transition hover:text-[#C8A96B]"
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              {/* More Filters */}
              <button
                type="button"
                onClick={() => setShowFilters((current) => !current)}
                className={`flex h-14 items-center justify-center gap-2 rounded-xl border px-6 text-sm transition ${
                  showFilters
                    ? "border-[#C8A96B] bg-[#C8A96B] text-white"
                    : "border-[#172033]/10 text-[#172033] hover:border-[#C8A96B] hover:text-[#C8A96B]"
                }`}
              >
                <SlidersHorizontal size={17} />
                More Filters
              </button>

            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-3 rounded-xl border border-[#172033]/8 bg-[#F8F6F1] p-5 sm:p-6">

                <div className="grid gap-7 md:grid-cols-2">

                  {/* Bedrooms */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#172033]/50">
                      Bedrooms
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[0, 2, 3, 4].map((bedrooms) => (
                        <button
                          key={bedrooms}
                          type="button"
                          onClick={() =>
                            setMinBedrooms(bedrooms)
                          }
                          className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                            minBedrooms === bedrooms
                              ? "bg-[#172033] text-white"
                              : "bg-white text-[#172033]/60 hover:text-[#172033]"
                          }`}
                        >
                          {bedrooms === 0
                            ? "Any"
                            : `${bedrooms}+ Beds`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#172033]/50">
                      Price Range
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setPriceRange("all")}
                        className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                          priceRange === "all"
                            ? "bg-[#172033] text-white"
                            : "bg-white text-[#172033]/60 hover:text-[#172033]"
                        }`}
                      >
                        Any Price
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setPriceRange("under-2")
                        }
                        className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                          priceRange === "under-2"
                            ? "bg-[#172033] text-white"
                            : "bg-white text-[#172033]/60 hover:text-[#172033]"
                        }`}
                      >
                        Under Rp 2 M
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setPriceRange("2-4")
                        }
                        className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                          priceRange === "2-4"
                            ? "bg-[#172033] text-white"
                            : "bg-white text-[#172033]/60 hover:text-[#172033]"
                        }`}
                      >
                        Rp 2–4 M
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setPriceRange("above-4")
                        }
                        className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                          priceRange === "above-4"
                            ? "bg-[#172033] text-white"
                            : "bg-white text-[#172033]/60 hover:text-[#172033]"
                        }`}
                      >
                        Above Rp 4 M
                      </button>
                    </div>
                  </div>

                </div>

                {/* Reset */}
                <div className="mt-6 flex justify-end border-t border-[#172033]/10 pt-5">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-medium text-[#172033]/50 transition hover:text-[#C8A96B]"
                  >
                    Reset all filters
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>
      </section>

      {/* Properties */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Toolbar */}
          <div className="flex flex-col gap-6 border-b border-[#172033]/10 pb-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-sm text-[#172033]/45">
                Showing
              </p>

              <p className="mt-1 text-2xl font-semibold text-[#172033]">
                {filteredProperties.length}
                <span className="ml-2 text-sm font-normal text-[#172033]/40">
                  properties
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              {/* Type filters */}
              <div className="flex flex-wrap gap-2">
                {(
                  ["All", "House", "Villa", "Apartment"] as FilterType[]
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`rounded-full px-5 py-2.5 text-xs font-medium transition ${
                      activeType === type
                        ? "bg-[#172033] text-white"
                        : "bg-white text-[#172033]/55 hover:text-[#172033]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5">
                <ArrowDownUp
                  size={15}
                  className="text-[#C8A96B]"
                />

                <select
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value)
                  }
                  className="bg-transparent text-xs text-[#172033] outline-none"
                >
                  <option value="default">
                    Recommended
                  </option>

                  <option value="low">
                    Price: Low to High
                  </option>

                  <option value="high">
                    Price: High to Low
                  </option>
                </select>
              </div>

            </div>
          </div>

          {/* Active filter indicator */}
          {(search ||
            activeType !== "All" ||
            minBedrooms > 0 ||
            priceRange !== "all") && (
            <div className="mt-6 flex flex-wrap items-center gap-2">

              <span className="mr-1 text-xs text-[#172033]/40">
                Active filters:
              </span>

              {search && (
                <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#172033]">
                  “{search}”
                </span>
              )}

              {activeType !== "All" && (
                <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#172033]">
                  {activeType}
                </span>
              )}

              {minBedrooms > 0 && (
                <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#172033]">
                  {minBedrooms}+ Beds
                </span>
              )}

              {priceRange !== "all" && (
                <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#172033]">
                  {priceRange === "under-2"
                    ? "Under Rp 2 M"
                    : priceRange === "2-4"
                      ? "Rp 2–4 M"
                      : "Above Rp 4 M"}
                </span>
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="ml-1 text-xs font-medium text-[#C8A96B] hover:underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {filteredProperties.map((property) => {
                const isFavorite = favorites.includes(property.id)

                return (
                  <article
                    key={property.id}
                    className="group"
                  >

                    {/* Image */}
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#E9E5DC]">

                      <img
                        src={property.image}
                        alt={property.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60" />

                      {/* Type */}
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#172033] backdrop-blur-sm">
                        {property.type}
                      </div>

                      {/* Favorite */}
                      <button
                        type="button"
                        onClick={() =>
                          toggleFavorite(property.id)
                        }
                        aria-label={
                          isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition ${
                          isFavorite
                            ? "bg-[#C8A96B] text-white"
                            : "bg-white/90 text-[#172033]"
                        }`}
                      >
                        <Heart
                          size={17}
                          fill={
                            isFavorite
                              ? "currentColor"
                              : "none"
                          }
                          strokeWidth={1.7}
                        />
                      </button>

                      {/* Featured */}
                      {property.featured && (
                        <div className="absolute bottom-4 left-4 rounded-full bg-[#C8A96B] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                          Featured
                        </div>
                      )}

                    </div>

                    {/* Content */}
                    <div className="mt-5">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h2 className="text-xl font-semibold tracking-tight text-[#172033]">
                            {property.title}
                          </h2>

                          <div className="mt-2 flex items-center gap-1.5 text-sm text-[#172033]/45">
                            <MapPin size={14} />
                            {property.location}
                          </div>
                        </div>

                        <p className="whitespace-nowrap text-lg font-semibold text-[#C8A96B]">
                          {property.priceLabel}
                        </p>

                      </div>

                      {/* Details */}
                      <div className="mt-5 flex items-center gap-5 border-t border-[#172033]/10 pt-4 text-xs text-[#172033]/50">

                        <span className="flex items-center gap-1.5">
                          <BedDouble size={15} />
                          {property.bedrooms} Beds
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Bath size={15} />
                          {property.bathrooms} Baths
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Square size={14} />
                          {property.area} m²
                        </span>

                      </div>

                      {/* Detail */}
                      <Link
                        to={`/properties/${property.id}`}
                        className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#172033]"
                      >
                        View property

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </Link>

                    </div>

                  </article>
                )
              })}

            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-100 flex-col items-center justify-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <Search
                  size={24}
                  className="text-[#C8A96B]"
                />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#172033]">
                No properties found
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#172033]/45">
                Try another keyword or choose a different
                property category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-[#172033] px-6 py-3 text-sm text-white transition hover:bg-[#C8A96B]"
              >
                Clear filters
              </button>

            </div>
          )}

        </div>
      </section>

    </div>
  )
}

export default Properties