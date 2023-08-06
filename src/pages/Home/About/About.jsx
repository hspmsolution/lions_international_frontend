import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@mui/material";
import { useState } from "react";

library.add(faHeadphones, faCirclePlay, faCirclePause);

function About() {
  const [playing, setPlaying] = useState({
    audio: new Audio("/assets/SampleAudio.mp3"),
    isPlaying: false,
  });

  const setPlayTheme = () => {
    setPlaying((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));

    {
      !playing.isPlaying ? playing.audio.play() : playing.audio.pause();
    }
  };

  return (
    <div className="about-cnr">
      <div className="about-card">
        <img src={"/assets/img/logo2.png"} alt="" />
        <div className="about-dist">
          <h1 className="about-dist-h">About District 317F</h1>
          <p>
            WE SERVE WITH EMPATHY Our Logo, envisioned by our District Governor
            is an embodiment of the theme for the year. The first hand
            symbolises guidance, direction, support and encouragement we offer
            to the Lions to empower them and promote highest ethical standards.
            The second hand is the embodiment of compassion, protection and
            kindness towards the society, fostering the spirit of understanding.
            The motto for the year is “WE SERVE With EMPATHY” Empathy is the
            ability imagine what it is like to be the other person, recognising
            their emotion, understanding their feelings and being there for the
            person, without any judgement. It encourages the Lions to empathise
            with every person in genuine need and help them in The blue
            represents knowledge, stability, integrity & inspiration Green
            represents ANew Beginning, growth and abundance The Lions logo in
            the centre represents the selfless service of Lions across the
            world, over the last 106 years The best way to find yourself is to
            lose yourself in the service of others – 
          </p>
          {/* <div id="audio">
                        <h4>Listen To Our Theme Song <FontAwesomeIcon icon={faHeadphones} /></h4>
                        <Link onClick={setPlayTheme}><FontAwesomeIcon icon={faCirclePlay} className="playIcon" /></Link>
                        <Link onClick={setPlayTheme}><FontAwesomeIcon icon={faCirclePause} className="pauseIcon" /></Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
