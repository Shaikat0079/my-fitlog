"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import PlanBadge from "./PlanBadge";
import SaveBadge from "./SaveBadge";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Workouts",
      href: "/",
    },
    {
      name: "Plan",
      href: "/my-plan",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#111318]/90 shadow-lg backdrop-blur-md">
      <div className="navbar container mx-auto min-h-16 px-4 lg:px-8">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm mr-2"
            >
              <svg
                aria-label="Menu"
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-[#191c22] p-2 shadow-lg"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isActive(link.href)
                        ? "font-semibold text-[#c4f000]"
                        : "text-gray-300"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#c4f000]"
              aria-hidden="true"
            >
              <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />

              <path d="m2.5 21.5 1.4-1.4" />

              <path d="m20.1 3.9 1.4-1.4" />

              <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 1 0-2.828 2.829z" />

              <path d="m9.6 14.4 4.8-4.8" />
            </svg>

            <p className="text-lg font-bold tracking-wide text-white sm:text-xl">
              FITLOG
            </p>
          </Link>

        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-2 px-1">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-200 ${
                      active
                        ? "text-[#c4f000]"
                        : "text-gray-300 hover:text-[#c4f000]"
                    }`}
                  >
                    {link.name}
                  </Link>

                </li>
              );
            })}

          </ul>

        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-2">

          <PlanBadge />

          <SaveBadge />

        </div>

      </div>
    </header>
  );
};

export default Navbar;