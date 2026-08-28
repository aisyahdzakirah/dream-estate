import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Reveal from "./Reveal"

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#172033] px-6 py-28 lg:px-8"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-3xl" />

      <Reveal>
        <div className="relative mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96B]">
            Mulailah perjalanan Anda
          </p>

          {/* Heading */}
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Rumah impian Anda
            <br />

            <span className="font-serif italic font-normal text-[#C8A96B]">
              mungkin lebih dekat dari
            </span>

            <br />

            <span className="font-serif italic font-normal text-[#C8A96B]">
              yang Anda bayangkan.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Jelajahi koleksi properti pilihan kami dan temukan
            tempat yang benar-benar terasa milik Anda.
          </p>

          {/* Button */}
          <Link
            to="/properties"
            className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#172033] transition-all duration-300 hover:bg-[#C8A96B] hover:text-white hover:shadow-[0_15px_40px_rgba(200,169,107,0.2)]"
          >
            Jelajahi Properti

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </Reveal>

      {/* Bottom decorative line */}
      <div className="mx-auto mt-20 h-px max-w-7xl bg-white/10" />

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/25">
        <span>DreamEstate</span>
        <span>Find your place</span>
      </div>

    </section>
  )
}

export default CTA