"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Teens", href: "/teens" },
  ];

  const pathname = usePathname();

  const { handleCartClick } = useShoppingCart();

  const [open, setOpen] = useState(false);

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Wiz<span className="text-primary">Store</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex 2xl:ml-16 gap-12">
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
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            onClick={() => handleCartClick()}
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-20 md:w-20 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden sm:block text-xs font-semibold text-gray-500">
              Cart
            </span>
          </Button>
        </div>

        {/* Responsive menu */}
        <div className="lg:hidden">
          {/* menu */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoMdMenu className="text-primary text-3xl " />
          </button>
          {/* list */}
          <div className="z-50">
            {open && (
              <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center flex-col gap-8 text-3xl z-40">
                {links.map((link) => (
                  <div className="" key={link.href}>
                    <Link href={link.href} onClick={() => setOpen(!open)}>
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
