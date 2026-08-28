import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Heart,
  MapPin,
  Ruler,
  Share2,
  X,
} from "lucide-react"

import { properties } from "../data/properties"
import ScheduleVisitModal from "../components/ScheduleVisitModal"

function PropertyDetail() {
  const { id } = useParams()

  const property = properties.find(
    (item) => item.id === Number(id),
  )

  const [favorite, setFavorite] = useState(false)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)
  const [showScheduleModal, setShowScheduleModal] =
    useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href,
      )

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F6F1] px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
          DreamEstate
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-[#172033]">
          Property not found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#172033]/50">
          The property you're looking for may have been
          removed or doesn't exist.
        </p>

        <Link
          to="/properties"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#C8A96B]"
        >
          <ArrowLeft size={16} />
          Back to properties
        </Link>
      </div>
    )
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    setSent(true)
  }

  const galleryImages = [
    property.image,
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  ]

  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* Back navigation */}
      <div className="px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/properties"
            className="group inline-flex items-center gap-2 text-sm text-[#172033]/55 transition hover:text-[#172033]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to properties
          </Link>
        </div>
      </div>

      <main className="px-6 pb-24 pt-8 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* =========================
              GALLERY
          ========================= */}
          <div className="grid gap-3 lg:grid-cols-[1.7fr_1fr]">

            {/* Main image */}
            <button
              type="button"
              onClick={() =>
                setSelectedImage(galleryImages[0])
              }
              className="group relative overflow-hidden rounded-4xl bg-[#E8E4DB] text-left"
            >
              <div className="aspect-16/10 lg:h-full">
                <img
                  src={galleryImages[0]}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#172033] backdrop-blur-md">
                {property.type}
              </div>

              {property.featured && (
                <div className="absolute bottom-6 left-6 rounded-full bg-[#C8A96B] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Featured property
                </div>
              )}

              <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#172033] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                View image
              </div>
            </button>

            {/* Side images */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {galleryImages.slice(1).map(
                (image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    className="group relative overflow-hidden rounded-3xl bg-[#E8E4DB]"
                  >
                    <div className="aspect-4/3 lg:h-full">
                      <img
                        src={image}
                        alt={`${property.title} view ${
                          index + 2
                        }`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                    <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#172033] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                      View image
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>

          {/* =========================
              HEADER
          ========================= */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <div className="flex items-center gap-2 text-sm text-[#172033]/45">
                <MapPin size={15} />
                {property.location}, {property.city}
              </div>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
                {property.title}
              </h1>
            </div>

            <div className="lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-[#172033]/35">
                Asking price
              </p>

              <p className="mt-1 text-3xl font-semibold text-[#C8A96B]">
                {property.priceLabel}
              </p>
            </div>

          </div>

          {/* =========================
              ACTIONS
          ========================= */}
          <div className="relative mt-8 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() =>
                setFavorite((current) => !current)
              }
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                favorite
                  ? "bg-[#C8A96B] text-white"
                  : "bg-white text-[#172033] hover:bg-[#172033] hover:text-white"
              }`}
            >
              <Heart
                size={16}
                fill={
                  favorite ? "currentColor" : "none"
                }
              />

              {favorite ? "Saved" : "Save property"}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#172033] transition hover:bg-[#172033] hover:text-white"
            >
              <Share2 size={16} />
              Share
            </button>

            {copied && (
              <div className="absolute left-0 top-14 z-10 rounded-full bg-[#172033] px-4 py-2 text-xs font-medium text-white shadow-lg">
                Link copied!
              </div>
            )}

          </div>

          {/* =========================
              STATS
          ========================= */}
          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl bg-white">

            <div className="border-r border-[#172033]/10 p-5 sm:p-7">
              <BedDouble
                size={21}
                className="text-[#C8A96B]"
                strokeWidth={1.5}
              />

              <p className="mt-4 text-2xl font-semibold text-[#172033]">
                {property.bedrooms}
              </p>

              <p className="mt-1 text-xs text-[#172033]/40">
                Bedrooms
              </p>
            </div>

            <div className="border-r border-[#172033]/10 p-5 sm:p-7">
              <Bath
                size={21}
                className="text-[#C8A96B]"
                strokeWidth={1.5}
              />

              <p className="mt-4 text-2xl font-semibold text-[#172033]">
                {property.bathrooms}
              </p>

              <p className="mt-1 text-xs text-[#172033]/40">
                Bathrooms
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <Ruler
                size={21}
                className="text-[#C8A96B]"
                strokeWidth={1.5}
              />

              <p className="mt-4 text-2xl font-semibold text-[#172033]">
                {property.area}
              </p>

              <p className="mt-1 text-xs text-[#172033]/40">
                Square meters
              </p>
            </div>

          </div>

          {/* =========================
              CONTENT
          ========================= */}
          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_380px]">

            {/* LEFT */}
            <div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
                About the property
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033]">
                Designed for the way
                <br />
                <span className="font-serif italic font-normal text-[#C8A96B]">
                  you want to live.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#172033]/55">
                This thoughtfully designed{" "}
                {property.type.toLowerCase()} offers a refined
                balance between comfort, functionality, and
                modern living. Every space has been carefully
                considered to create a home that feels calm,
                welcoming, and effortlessly elegant.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#172033]/55">
                Located in {property.location}, the property
                gives you convenient access to the city's
                essential destinations while maintaining a
                sense of privacy and tranquility.
              </p>

              {/* Details */}
              <div className="mt-12 border-t border-[#172033]/10">

                <h3 className="py-6 text-lg font-semibold text-[#172033]">
                  Property details
                </h3>

                <div className="grid border-t border-[#172033]/10 sm:grid-cols-2">

                  <div className="flex justify-between border-b border-[#172033]/10 py-4 pr-6">
                    <span className="text-sm text-[#172033]/45">
                      Property type
                    </span>

                    <span className="text-sm font-medium text-[#172033]">
                      {property.type}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-[#172033]/10 py-4 sm:pl-6">
                    <span className="text-sm text-[#172033]/45">
                      Location
                    </span>

                    <span className="text-sm font-medium text-[#172033]">
                      {property.city}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-[#172033]/10 py-4 pr-6">
                    <span className="text-sm text-[#172033]/45">
                      Bedrooms
                    </span>

                    <span className="text-sm font-medium text-[#172033]">
                      {property.bedrooms}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-[#172033]/10 py-4 sm:pl-6">
                    <span className="text-sm text-[#172033]/45">
                      Bathrooms
                    </span>

                    <span className="text-sm font-medium text-[#172033]">
                      {property.bathrooms}
                    </span>
                  </div>

                  <div className="flex justify-between py-4 pr-6">
                    <span className="text-sm text-[#172033]/45">
                      Floor area
                    </span>

                    <span className="text-sm font-medium text-[#172033]">
                      {property.area} m²
                    </span>
                  </div>

                  <div className="flex justify-between py-4 sm:pl-6">
                    <span className="text-sm text-[#172033]/45">
                      Status
                    </span>

                    <span className="text-sm font-medium text-[#C8A96B]">
                      Available
                    </span>
                  </div>

                </div>
              </div>

              {/* Highlights */}
              <div className="mt-12">

                <h3 className="text-lg font-semibold text-[#172033]">
                  Highlights
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {[
                    "Modern architecture",
                    "Natural lighting",
                    "Premium finishes",
                    "Spacious living area",
                    "Private parking",
                    "Prime location",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1]">
                        <Check
                          size={14}
                          className="text-[#C8A96B]"
                        />
                      </div>

                      <span className="text-sm text-[#172033]/65">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>

            {/* =========================
                CONTACT CARD
            ========================= */}
            <div>

              <div className="sticky top-28 rounded-2xl bg-[#172033] p-7 text-white shadow-[0_25px_70px_rgba(23,32,51,0.15)]">

                {!sent ? (
                  <>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
                      Interested?
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold">
                      Make this place yours.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Leave your details and our property
                      advisor will get in touch with you.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-7 space-y-4"
                    >

                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A96B]"
                      />

                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A96B]"
                      />

                      <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A96B]"
                      />

                      <textarea
                        rows={4}
                        placeholder="I'm interested in this property..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A96B]"
                      />

                      <button
                        type="submit"
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C8A96B] text-sm font-medium text-white transition hover:bg-[#b7965b]"
                      >
                        Send inquiry

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>

                    </form>

                    {/* Schedule visit */}
                    <button
                      type="button"
                      onClick={() =>
                        setShowScheduleModal(true)
                      }
                      className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-medium text-white transition hover:border-[#C8A96B] hover:bg-white/5"
                    >
                      <CalendarDays size={16} />
                      Schedule a visit
                    </button>
                  </>
                ) : (
                  <div className="flex min-h-100 flex-col items-center justify-center text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96B]">
                      <Check size={24} />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold">
                      Inquiry sent.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Thank you for your interest. Our property
                      advisor will contact you shortly.
                    </p>

                    <Link
                      to="/properties"
                      className="mt-7 inline-flex items-center gap-2 text-sm text-[#C8A96B]"
                    >
                      Explore more properties
                      <ArrowRight size={15} />
                    </Link>

                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

        {/* =========================
            IMAGE LIGHTBOX
        ========================= */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#0b0f18]/95 p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#C8A96B]"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage}
              alt={property.title}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />

          </div>
        )}

      </main>

      {/* =========================
          SCHEDULE VISIT MODAL
      ========================= */}
      {showScheduleModal && (
        <ScheduleVisitModal
          propertyTitle={property.title}
          onClose={() => setShowScheduleModal(false)}
        />
      )}

    </div>
  )
}

export default PropertyDetail