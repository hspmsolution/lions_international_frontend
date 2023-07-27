import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import About from "./About/About.jsx";
import ClubRank from "./Rank/ClubRank.jsx";
import Counters from "./Counters/Counters.jsx";
import Team from "./Team/Team.jsx";
import Activities from "./Activities/Activities.jsx";
import MasonryImageList from "./Gallery/Gallery";

function Home() {
  return (
    <div className="App">
      <Slider />
      <About />
      <Counters />
      <Team />
      <Activities />
      <MasonryImageList />
      <ClubRank />
    </div>
  );
}

export default Home;
