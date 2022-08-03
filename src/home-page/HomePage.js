import React from "react";
import FirstSection from "./components/first-section/FirstSection";
import Navbar from "./components/nav-bar/Navbar";
import SecondSection from "./components/second-section/SecondSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
