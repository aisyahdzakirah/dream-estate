import { useState } from "react"
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react"

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1] px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C8A96B]">
            Get in touch
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#172033] sm:text-6xl lg:text-7xl">
            Let's find your
            <br />
            <span className="font-serif italic font-normal text-[#C8A96B]">
              dream place.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#172033]/55">
            Whether you're looking for a new home, planning an
            investment, or simply want to explore your options,
            our property advisors are here to help.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_430px]">

          {/* Left Info */}
          <div className="rounded-3xl bg-[#172033] p-8 text-white sm:p-10">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
              DreamEstate
            </p>

            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
              A conversation is the
              <span className="font-serif italic font-normal text-[#C8A96B]">
                {" "}first step.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
              Tell us what you're looking for and we'll help you
              discover a property that feels right for you.
            </p>

            <div className="mt-10 space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Mail
                    size={18}
                    className="text-[#C8A96B]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="text-xs text-white/35">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    hello@dreamestate.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Phone
                    size={18}
                    className="text-[#C8A96B]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="text-xs text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm">
                    +62 812 3456 7890
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <MapPin
                    size={18}
                    className="text-[#C8A96B]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="text-xs text-white/35">
                    Office
                  </p>

                  <p className="mt-1 text-sm">
                    South Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_20px_60px_rgba(23,32,51,0.06)] sm:p-9">

            {!sent ? (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#C8A96B]">
                  Send a message
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-[#172033]">
                  Tell us what you need.
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-4"
                >

                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-xl border border-[#172033]/10 bg-[#F8F6F1]/50 px-4 text-sm text-[#172033] outline-none placeholder:text-[#172033]/30 focus:border-[#C8A96B]"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="h-12 w-full rounded-xl border border-[#172033]/10 bg-[#F8F6F1]/50 px-4 text-sm text-[#172033] outline-none placeholder:text-[#172033]/30 focus:border-[#C8A96B]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="h-12 w-full rounded-xl border border-[#172033]/10 bg-[#F8F6F1]/50 px-4 text-sm text-[#172033] outline-none placeholder:text-[#172033]/30 focus:border-[#C8A96B]"
                  />

                  <select
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-[#172033]/10 bg-[#F8F6F1]/50 px-4 text-sm text-[#172033]/60 outline-none focus:border-[#C8A96B]"
                  >
                    <option value="" disabled>
                      What are you looking for?
                    </option>
                    <option value="house">
                      House
                    </option>
                    <option value="villa">
                      Villa
                    </option>
                    <option value="apartment">
                      Apartment
                    </option>
                    <option value="investment">
                      Property investment
                    </option>
                  </select>

                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us a little about what you're looking for..."
                    className="w-full resize-none rounded-xl border border-[#172033]/10 bg-[#F8F6F1]/50 px-4 py-3 text-sm text-[#172033] outline-none placeholder:text-[#172033]/30 focus:border-[#C8A96B]"
                  />

                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#172033] text-sm font-medium text-white transition hover:bg-[#C8A96B]"
                  >
                    Send message

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                </form>
              </>
            ) : (
              <div className="flex min-h-120 flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96B] text-white">
                  <Check size={27} />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[#172033]">
                  Message sent.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#172033]/50">
                  Thank you for reaching out. Our property advisor
                  will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 text-sm font-medium text-[#C8A96B] transition hover:text-[#172033]"
                >
                  Send another message
                </button>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact