import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Categories from "./components/Categories";
import AllProducts from "./components/AllProducts";
import Video from "./components/Video";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <Categories />
      <AllProducts />
      <Video />
    </div>
  );
}
