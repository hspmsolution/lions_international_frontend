import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import About from "./About/About.jsx";
import ClubRank from "./Rank/ClubRank.jsx";
import Counters from "./Counters/Counters.jsx";
import Team from "./Team/Team.jsx";

function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
      if (scrollPosition > 650) {
        return 'scrolled';
      }
      return '';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="App">
      {scrollPosition > 650 ? (
        <Navbar />
      ) : null}
      <Header />
      <Slider />
      <About />
      <Counters />
      <Team />
      <ClubRank />
    </div>
  );
}

export default Home;