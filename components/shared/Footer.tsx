import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-[#111318]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
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

          <span className="text-lg font-bold tracking-wide text-white">
            FIT<span className="text-[#c4f000]">LOG</span>
          </span>
        </Link>

        {/* DESCRIPTION */}
        <p className="text-center text-sm text-gray-500">
          Train with intent. Log every set.
        </p>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FitLog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
