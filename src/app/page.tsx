import Carousel from "@/components/Carousel";
import ClientShowcase from "@/components/ClientGrid";
import LocationSection from "@/components/Location";
import HomeProducts from "@/components/Products";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Carousel />
    <HomeProducts />
    <ClientShowcase />
    <LocationSection />
    </>
  );
}
