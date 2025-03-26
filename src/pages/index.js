import { Geist, Geist_Mono } from "next/font/google";
import ListAds from "@/components/ListAds";
import { useEffect, useState } from "react";

export default function Home() {
  const [ads, setAds] = useState({});
  useEffect(() => {
    const handleLoadAd = async () => {
      // const res = await fetch(
      //   "https://gateway.chotot.org/v1/public/recommender/homepage?fingerprint="
      // );
      setAds(window.adData);
    }
    document.addEventListener("dataLoaded", handleLoadAd);
    return () =>
      document.removeEventListener("dataLoaded", handleLoadAd);
  }, []);
  return (
    <div>
      <ListAds ads={ads} />
    </div>
  );
}
