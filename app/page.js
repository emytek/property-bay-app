import HomeProperties from "../components/HomeProperties";
import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import FeaturedProperties from '../components/FeaturedProperties'
import connectDB from "../config/database";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  connectDB();

  return (
    <div>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
      {/* <Link 
      href={{
        pathname: 'properties',
        query: { name: 'test'}
      }}
      >
        Go To Properties
      </Link> */}
      {/* <Link href='/properties?name=test'>Go To Properties</Link> */}
    </div>
  );
}
