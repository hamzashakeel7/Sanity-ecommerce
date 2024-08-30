import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./AllProducts.css";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Slider from "./Slider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// fetching data from sanity
async function getData() {
  const query = `*[_type == "product"] {
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

const AllProducts = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
              All Products
            </h2>
            <Link
              href="/all"
              className="text-primary flex items-center gap-x-1"
            >
              View More{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="overflow-x-hidden">
              <Slider data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
