import ImageSlider, { Slide } from "react-auto-image-slider";
import { useSelector } from "react-redux";
import { API_URL } from "../../api";
import "./slider.css";
import { Link } from "react-router-dom";

function Slider() {
  const images = useSelector((state) => state.client.sliderImages);

  return (
    <div className="imgSlider">
      <div className="head-dist-h">
        <Link to="/">
          <img
            className="logoImg"
            src={"/assets/img/logo2.png"}
            alt="Lions Club"
          />
        </Link>
        <div>
          <div className="head-lions-i">LIONS CLUB INTERNATIONAL</div>
          <div className="head-dist-num">DISTRICT 317-F</div>
        </div>
      </div>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        {images?.map((path, index) => (
          <Slide key={index}>
            <div className="imgSlide">
              <img alt={`img${index}`} src={`${API_URL}${path?.image}`} />
            </div>
          </Slide>
        ))}
      </ImageSlider>
    </div>
  );
}

export default Slider;

// const images = [
//     saibaba_baner_3_center,
//     lions_international_baner_1_resize,
//     godavari_baner_4_center,
//     shaniwarwada_baner_2_center
// ];
