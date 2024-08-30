"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Teens", href: "/teens" },
  ];
  const pathname = usePathname();
  return (
    <footer className="mt-5">
      <div className="border-t-2 border-gray-300">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl mt-8">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold mb-10 flex items-center justify-center relative left-28">
              Wiz<span className="text-primary">Store</span>
            </h1>
          </Link>

          <footer className="hidden items-center justify-center lg:flex 2xl:ml-16 gap-2 md:gap-5 lg:gap-12 flex-wrap mb-10">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className="text-lg font-semibold text-primary"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </footer>
        </div>

        {/* copywrite */}
        <div className="">
          <p className="text-md md:text-lg text-gray-500 text-center">
            © Developed by{" "}
            <Link href="https://www.webwizdurrani.com" className="text-primary">
              webwizdurrani.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
