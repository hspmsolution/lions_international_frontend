import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

library.add(faHeadphones, faCirclePlay, faCirclePause);

function About() {
  return (
    <div className="about-cnr">
        <div className="about-card">
            <img src={"/assets/img/logo2.png"} alt="" />
            <div className="about-dist">
                <h1 className="about-dist-h">About District 3234-D2</h1>
                <p>
                    WELCOME TO OUR WEBSITE OF LIONS CLUB INTERNATIONAL’s DISTRICT 3234-D2.
                    and all members of our District, 3234-D2. SOW SERVICE SEEDS with
                    KINDNESS IN UNITY AND DIVERSITY to Give More for Community. Your journey
                    through the web pages is made extremely simple with distinct information
                    about our organization and its administrative functioning and reporting.
                </p>
                <div id="audio">
                    <h4>Listen To Our Theme Song <FontAwesomeIcon icon={faHeadphones} /></h4>
                    <a href="/"><FontAwesomeIcon icon={faCirclePlay} className="playIcon" /></a>
                    <a href="/"><FontAwesomeIcon icon={faCirclePause} className="pauseIcon" /></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;