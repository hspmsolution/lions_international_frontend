import ImageSlider, { Slide } from "react-auto-image-slider";
import helpingLions from "./img/helpingLions.jpg";
import helpingLions1 from "./img/helpingLions(1).jpg";
import helpingLions2 from "./img/helpingLions(2).jpeg";
import './slider.css'

function Slider() {
  return (
    <div className="imgSlider">
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        <Slide>
          <div className='imgSlide'>
          <img alt="img1" src={helpingLions} />
          </div>
        </Slide>
        <Slide>
        <div className='imgSlide'>
          <img alt="img1" src={helpingLions1} />
          </div>
        </Slide>
        <Slide>
        <div className='imgSlide'>
          <img alt="img1" src={helpingLions2} />
          </div>
        </Slide>
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