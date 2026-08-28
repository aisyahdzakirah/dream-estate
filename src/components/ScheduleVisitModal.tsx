import { useState } from "react"
import { CalendarDays, Check, Clock, X } from "lucide-react"

type ScheduleVisitModalProps = {
  propertyTitle: string
  onClose: () => void
}

function ScheduleVisitModal({
  propertyTitle,
  onClose,
}: ScheduleVisitModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-110 flex items-center justify-center bg-[#0b0f18]/70 px-5 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#F8F6F1] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172033] shadow-sm transition hover:bg-[#C8A96B] hover:text-white"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="p-7 sm:p-9">

            {/* Header */}
            <div className="pr-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A96B]">
                Private viewing
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033]">
                Schedule a visit
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#172033]/50">
                Choose a preferred date and time to visit
                <span className="font-medium text-[#172033]/70">
                  {" "}
                  {propertyTitle}
                </span>
                .
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Date & Time */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="visit-date"
                    className="mb-2 block text-xs font-medium text-[#172033]/65"
                  >
                    Preferred date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A96B]"
                    />

                    <input
                      id="visit-date"
                      name="date"
                      type="date"
                      required
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      value={formData.date}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-[#172033]/10 bg-white pl-11 pr-4 text-sm text-[#172033] outline-none transition focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="visit-time"
                    className="mb-2 block text-xs font-medium text-[#172033]/65"
                  >
                    Preferred time
                  </label>

                  <div className="relative">
                    <Clock
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A96B]"
                    />

                    <select
                      id="visit-time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="h-12 w-full appearance-none rounded-xl border border-[#172033]/10 bg-white pl-11 pr-4 text-sm text-[#172033] outline-none transition focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/10"
                    >
                      <option value="">
                        Select time
                      </option>
                      <option value="09:00">
                        09:00 AM
                      </option>
                      <option value="10:00">
                        10:00 AM
                      </option>
                      <option value="11:00">
                        11:00 AM
                      </option>
                      <option value="13:00">
                        01:00 PM
                      </option>
                      <option value="14:00">
                        02:00 PM
                      </option>
                      <option value="15:00">
                        03:00 PM
                      </option>
                      <option value="16:00">
                        04:00 PM
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="visit-name"
                  className="mb-2 block text-xs font-medium text-[#172033]/65"
                >
                  Full name
                </label>

                <input
                  id="visit-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#172033]/10 bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#172033]/25 focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="visit-email"
                  className="mb-2 block text-xs font-medium text-[#172033]/65"
                >
                  Email address
                </label>

                <input
                  id="visit-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#172033]/10 bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#172033]/25 focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="visit-phone"
                  className="mb-2 block text-xs font-medium text-[#172033]/65"
                >
                  Phone number
                </label>

                <input
                  id="visit-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+62 812 3456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#172033]/10 bg-white px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#172033]/25 focus:border-[#C8A96B] focus:ring-2 focus:ring-[#C8A96B]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#172033] text-sm font-medium text-white transition hover:bg-[#C8A96B]"
              >
                Request a visit

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-center text-[11px] leading-5 text-[#172033]/35">
                Our property advisor will contact you to
                confirm the appointment.
              </p>

            </form>
          </div>
        ) : (
          /* Success */
          <div className="flex min-h-500px flex-col items-center justify-center px-7 py-12 text-center sm:px-12">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96B] text-white shadow-lg shadow-[#C8A96B]/20">
              <Check size={28} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A96B]">
              Request received
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033]">
              Visit request sent.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#172033]/50">
              Thank you, {formData.name}. We'll contact you
              shortly to confirm your viewing of{" "}
              <span className="font-medium text-[#172033]/70">
                {propertyTitle}
              </span>
              .
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#C8A96B]"
            >
              Done
            </button>

          </div>
        )}

      </div>
    </div>
  )
}

export default ScheduleVisitModal