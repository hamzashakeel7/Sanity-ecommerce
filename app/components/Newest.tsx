import React from "react";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// fetching data from sanity
async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc)[0...4] {
  _id,
  price,
  name,
  "slug": slug.current,
  "CategoryName": category->name,
  "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Newest = async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Latest Products
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            View More{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <Link
                className="text-lg font-semibold"
                href={`/product/${product.slug}`}
              >
                <div className="aspect-square w-full rounded-md overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt=""
                    className="h-full w-full object-cover object-center lg:w-full lg:h-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-[15px] text-gray-700 md:text-lg lg:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.CategoryName}
                    </p>
                  </div>
                  <p className="font-medium text-sm text-gray-900">
                    RS {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
