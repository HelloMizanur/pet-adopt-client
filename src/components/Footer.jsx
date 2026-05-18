"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* ─── MAIN FOOTER CONTENT ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-9 h-9 bg-orange-500 text-white rounded-xl flex items-center justify-center text-lg shadow-sm">
              🐾
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">
              Pet<span className="text-orange-500">Adopt</span>
            </span>
          </Link>
          <p className="text-sm text-base-content/70 max-w-sm leading-relaxed">
            Our mission is to connect homeless pets with loving families. Every
            adoption saves a life and brings unconditional joy to a home.
          </p>
        </div>

        {/* Column 2: Contact Information */}
        <div className="flex flex-col gap-3">
          <h3 className="footer-title text-sm font-bold tracking-wider text-base-content/80 uppercase">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 text-sm text-base-content/70">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Mirpur-10, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a
                href="tel:+880123456789"
                className="hover:text-orange-500 transition-colors"
              >
                +880 1234-567890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:info@petadopt.com"
                className="hover:text-orange-500 transition-colors"
              >
                info@petadopt.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Social Links */}
        <div className="flex flex-col gap-3">
          <h3 className="footer-title text-sm font-bold tracking-wider text-base-content/80 uppercase">
            Follow Our Journey
          </h3>

          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm bg-base-300/50 hover:bg-orange-500 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.42 0-4 1.35-4 4v2z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm bg-base-300/50 hover:bg-orange-500 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="btn btn-ghost btn-circle btn-sm bg-base-300/50 hover:bg-orange-500 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/xl"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-base-content/60 mt-2">
            Stay tuned to our social media channels for current rescue
            operations and adoption stories.
          </p>
        </div>
      </div>

      {/* ─── BOTTOM BAR: COPYRIGHT ────────────────────────────── */}
      <div className="border-t border-base-300 bg-base-300/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-base-content">PetAdopt</span>.
            All rights reserved.
          </div>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
