import { BadgeCheck, Search, Sparkles } from "lucide-react"
import Reveal from "./Reveal"

const features = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Curated Properties",
    description:
      "Every property is carefully selected to give you better choices and a more enjoyable discovery experience.",
  },
  {
    number: "02",
    icon: Search,
    title: "Smart Search",
    description:
      "Find properties faster with intuitive search, filters, and categories designed around the way you search.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Made for Living",
    description:
      "We focus on more than numbers. Discover spaces that match your lifestyle, preferences, and aspirations.",
  },
]

function WhyDreamEstate() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <Reveal>
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
              Why DreamEstate
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl">
              A smarter way to find
              <span className="font-serif italic font-normal text-[#C8A96B]">
                {" "}your next home.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#252525]/55">
              We make property discovery simple, thoughtful, and
              enjoyable — so you can spend less time searching and
              more time imagining life in your new home.
            </p>
          </div>

          {/* Features */}
          <div className="divide-y divide-black/10">

            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.number}
                  className="group grid gap-5 py-8 sm:grid-cols-[60px_1fr_auto] sm:items-start"
                >

                  <span className="text-sm font-medium text-[#C8A96B]">
                    {feature.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F1] text-[#172033] transition group-hover:bg-[#172033] group-hover:text-white">
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-[#172033]">
                        {feature.title}
                      </h3>

                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#252525]/55">
                      {feature.description}
                    </p>
                  </div>

                  <span className="hidden text-[#C8A96B] transition group-hover:translate-x-1 sm:block">
                    →
                  </span>

                </div>
              )
            })}

          </div>

        </div>

      </div>
      </Reveal>
    </section>
  )
}

export default WhyDreamEstate