"use client";

import React from "react";
import { A11y, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Slider: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={20} // Adjust space between slides for better responsiveness
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3, // 2 slides per view on mobile
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((product) => (
          <SwiperSlide className="overflow-x-hidden" key={product._id}>
            <Link
              className="text-lg font-semibold"
              href={`/product/${product.slug}`}
            >
              <div className="overflow-x-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-[15rem] h-[12rem] lg:h-[18rem] object-cover object-center hover:opacity-80 rounded-md"
                  width={300}
                  height={300}
                />
                <div className="">
                  <div className="flex items-center justify-between mt-3">
                    <h3 className="!text-[15px] font-semibold !md:text-lg !lg:text-2xl xl:text-3xl">
                      {product.name}
                    </h3>
                    <p className="font-medium text-xs md:text-sm text-gray-900">
                      PKR {product.price}
                    </p>
                  </div>
                  <p className="flex left-0 text-sm text-gray-700">
                    {product.CategoryName}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
