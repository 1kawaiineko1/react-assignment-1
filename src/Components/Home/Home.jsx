import React from "react";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import HomeCategories from "../HomeCategories/HomeCategories";
import HomeRecent from "../HomeRecent/HomeRecent";
import Subscribe from "../Subscribe/Subscribe";
export default function Home() {
  return (
    <main className="grow pt-20">
      <Hero />
      <Featured />
      <HomeCategories />
      <HomeRecent />
      <Subscribe />
    </main>
  );
}
