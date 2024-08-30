import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
          Our Categories
        </h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-10">
          {/* 1 category */}
          <div>
            <Image
              alt=""
              className="w-full h-full object-cover object-center rounded-xl"
              width={550}
              height={550}
              src="/men.jpg"
            />
            <Link href="/men">
              <Button
                variant={"outline"}
                className="relative -top-20 left-14 md:left-32 lg:-top-28 lg:left-36"
              >
                Men
              </Button>
            </Link>
          </div>

          {/* 2 category */}
          <div>
            <Image
              alt=""
              className="relative w-full h-full object-cover object-center rounded-xl"
              width={550}
              height={550}
              src="/women.jpg"
            />
            <Link href="/women">
              <Button
                variant={"outline"}
                className="relative -top-20 left-14 lg:-top-28 lg:left-36"
              >
                Women
              </Button>
            </Link>
          </div>

          {/* 3 category */}
          <div>
            <Image
              alt=""
              className="relative w-full h-full object-cover object-center rounded-xl"
              width={520}
              height={520}
              src="/teen.jpg"
            />
            <Link href="/teens">
              <Button
                variant={"outline"}
                className="relative -top-20 left-14 lg:-top-28 lg:left-36"
              >
                Teens
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
