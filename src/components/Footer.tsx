import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111827] px-6 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href="/" className="inline-block">
              <div className="text-2xl font-semibold tracking-tight">
                Dream<span className="text-[#C8A96B]">Estate</span>
              </div>

              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/40">
                Find your place
              </p>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">
              A modern property discovery platform designed to help
              you find spaces that feel like home.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#C8A96B] hover:text-[#C8A96B]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#C8A96B] hover:text-[#C8A96B]"
              >
                <FaFacebook size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#C8A96B] hover:text-[#C8A96B]"
              >
                <FaTwitter size={16} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-medium text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/45">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#properties"
                  className="transition hover:text-white"
                >
                  Properties
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="transition hover:text-white"
                >
                  Collections
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About
                </a>
              </li>

            </ul>
          </div>

          {/* Property */}
          <div>
            <h3 className="text-sm font-medium text-white">
              Property
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/45">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Houses
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Villas
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Apartments
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  New Listings
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-white">
              Get in touch
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/45">
              <p>hello@dreamestate.com</p>
              <p>+62 812 3456 7890</p>
              <p>Jakarta, Indonesia</p>
            </div>

            <button
              type="button"
              className="group mt-5 flex items-center gap-1 text-sm text-[#C8A96B]"
            >
              Contact us

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 DreamEstate. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;