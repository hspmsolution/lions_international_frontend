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
                <img src={"/assets/img/logo2.png"}
                    alt="" />
                <div className="about-dist">
                    <h1 className="about-dist-h">About District 317F</h1>
                    <p>
                        Welcome to our website of lions club international’s district 317F.
                        and all members of our district, 317F. sow service seeds with
                        kindness in unity and diversity to give more for community. your journey
                        through the web pages is made extremely simple with distinct information
                        about our organization and its administrative functioning and reporting.
                    </p>
                    <div id="audio">
                        <h4>Listen To Our Theme Song <FontAwesomeIcon icon={faHeadphones} /></h4>
                        <a href="/"><FontAwesomeIcon icon={faCirclePlay}
                            className="playIcon" />
                        </a>
                        <a href="/"><FontAwesomeIcon icon={faCirclePause}
                            className="pauseIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;