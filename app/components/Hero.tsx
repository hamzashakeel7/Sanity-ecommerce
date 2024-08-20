import Image from "next/image";
import React from "react";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

// data fetching from sanity
async function getData() {
  const query = "*[_type == 'heroImages'][0]";

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Hero = async () => {
  // recieveing data in frontend
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:pb-6 lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl md:mb-8 text-black ">
            Top fashion for a top price !!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            perspiciatis distinctio illo! Quis, tenetur? Numquam tenetur sit rem
            perspiciatis minima?
          </p>
        </div>

        {/* images */}
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt=""
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              alt=""
              src={urlFor(data.image2).url()}
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* links */}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row ">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
