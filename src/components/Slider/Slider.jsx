import ImageSlider, { Slide } from "react-auto-image-slider";
import { useSelector } from "react-redux";
import { API_URL } from "../../api";
import "./slider.css";

function Slider() {
  const images = useSelector((state) => state.client.sliderImages);

  return (
    <div style={{ maxHeight: '100vh' }}>
      <div className="imgSlider">
        <div className="head-dist-h">
          <img
            className="logoImg"
            src={"/assets/img/logo2.png"}
            alt="Lions Club"
          />
          <div>
            <div className="head-lions-i">LIONS CLUB INTERNATIONAL</div>
            <div className="head-dist-num">DISTRICT 317-F</div>
          </div>
        </div>
        <ImageSlider effectDelay={500} autoPlayDelay={2000}>
          {images?.map((path, index) => (
            <Slide key={index}>
              <div className="slideOverlay">
                <div className="imgSlide">
                  <img alt={`img${index}`} src={`${API_URL}${path?.image}`} />
                </div>
              </div>
            </Slide>
          ))}
        </ImageSlider>
      </div>
    </div>
  );
}

export default Slider;