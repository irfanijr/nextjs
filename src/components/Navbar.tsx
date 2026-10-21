"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 top-0 z-50">
      <div className="max-w-6xl mx-auto h-16 flex items-center  justify-between">
        <span className="text-xl font-bold text-blue-600">My Company</span>
        <div className="flex gap-6 font-medium text-gray-600">
          <Link
            href="/"
            className={`hover:text-blue-600 transition-colors ${pathname === "/" ? "text-blue-600 underline" : ""} `}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`hover:text-blue-600 transition-colors ${pathname === "/team" ? "text-blue-600 underline" : ""} `}
          >
            Team
          </Link>
          <Link
            href="/team/detail"
            className={`hover:text-blue-600 transition-colors ${pathname === "/team/detail" ? "text-blue-600 underline" : ""} `}
          >
            Team Detail
          </Link>
          <Link
            href="/contact"
            className={`hover:text-blue-600 transition-colors ${pathname === "/contact" ? "text-blue-600 underline" : ""} `}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
