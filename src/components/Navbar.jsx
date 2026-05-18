"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-4 md:px-8 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      {/* ─── NAVBAR START: MOBILE MENU & LOGO ─────────────────── */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2 mr-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow-xl bg-base-100 rounded-2xl w-56 border border-base-200 gap-1"
          >
            <li>
              <Link
                href={"/"}
                className={`font-medium ${
                  isActive("/")
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "hover:bg-base-200"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/pets"}
                className={
                  isActive("/pets")
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "hover:bg-base-200"
                }
              >
                All Pets
              </Link>
            </li>
            <li>
              <Link
                href={"/requests"}
                className={
                  isActive("/requests")
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "hover:bg-base-200"
                }
              >
                My Requests
              </Link>
            </li>
            <li>
              <Link
                href={"/add-pet"}
                className={
                  isActive("/add-pet")
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "hover:bg-base-200"
                }
              >
                Add Pet
              </Link>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="w-9 h-9 bg-orange-500 text-white rounded-xl flex items-center justify-center text-lg shadow-sm">
            🐾
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-base-content">
            Pet<span className="text-orange-500">Adopt</span>
          </span>
        </Link>
      </div>

      {/* ─── NAVBAR CENTER: DESKTOP NAVIGATION ────────────────── */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-sm">
          <li>
            <Link
              href={"/"}
              className={`rounded-xl px-4 py-2 transition-colors ${
                isActive("/")
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "hover:bg-base-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/pets"}
              className={`rounded-xl px-4 py-2 transition-colors ${
                isActive("/pets")
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "hover:bg-base-200"
              }`}
            >
              All Pets
            </Link>
          </li>
          <li>
            <Link
              href={"/requests"}
              className={`rounded-xl px-4 py-2 transition-colors ${
                isActive("/requests")
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "hover:bg-base-200"
              }`}
            >
              My Requests
            </Link>
          </li>
          <li>
            <Link
              href={"/add-pet"}
              className={`rounded-xl px-4 py-2 transition-colors ${
                isActive("/add-pet")
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "hover:bg-base-200"
              }`}
            >
              Add Pet
            </Link>
          </li>
        </ul>
      </div>

      {/* ─── NAVBAR END: THEME TOGGLE, LOGIN & USER ───────────── */}
      <div className="navbar-end gap-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm rounded-xl px-3 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03442 19.1758 5.14304 19.4184 5.14304 19.6824V20C5.14304 21.1046 6.03847 22 7.14304 22H12Z" />
              <circle cx="7.5" cy="10.5" r="1.5" />
              <circle cx="11.5" cy="7.5" r="1.5" />
              <circle cx="16.5" cy="9.5" r="1.5" />
              <circle cx="15.5" cy="14.5" r="1.5" />
            </svg>
            <span className="hidden md:inline text-xs font-semibold">
              Theme
            </span>
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-2xl w-44 border border-base-200 mt-3 z-[1] gap-1"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-ghost justify-start font-medium text-sm rounded-xl"
                aria-label="☀️ Light"
                value="light"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-ghost justify-start font-medium text-sm rounded-xl"
                aria-label="🌙 Dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-ghost justify-start font-medium text-sm rounded-xl"
                aria-label="🤖 Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-ghost justify-start font-medium text-sm rounded-xl"
                aria-label="💕 Valentine"
                value="valentine"
              />
            </li>
          </ul>
        </div>

        <Link
          href="/login"
          className={`btn btn-sm rounded-xl px-4 text-sm font-semibold transition-colors ${
            isActive("/login") ? "btn-neutral" : "btn-ghost hover:bg-base-200"
          }`}
        >
          Login
        </Link>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle avatar ring-offset-base-100 ring-offset-2 ${
              isActive("/dashboard")
                ? "ring-4 ring-orange-600"
                : "ring-2 ring-orange-500"
            }`}
          >
            <div className="w-10 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-lg">👨</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-48 border border-base-200 gap-1"
          >
            <li>
              <Link
                href="/dashboard"
                className={`py-2 rounded-xl ${isActive("/dashboard") ? "bg-orange-500 text-white" : "hover:bg-base-200"}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="py-2 text-error hover:bg-error/10 rounded-xl font-medium"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
