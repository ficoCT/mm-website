import Image1 from "../assets/homeImage1.jpg";
import Image2 from "../assets/homeImage2.jpg";
import Image3 from "../assets/homeImage3.jpg";
import { BrowserView, MobileView } from "react-device-detect";

export default function Slider() {

  return (
    <>
      <BrowserView>
        <div className="d-inline-flex justify-content-between mb-2">
          <img src={Image1} alt="Image1" className="image"/>
          <img src={Image2} alt="Image2" className="image"/>
          <img src={Image3} alt="Image3" className="image"/>
        </div>
      </BrowserView>
      <MobileView>
      <div className="d-flex flex-column">
          <img src={Image1} alt="Image1" className="mobile__slider__image"/>
          <img src={Image2} alt="Image2" className="mobile__slider__image"/>
          <img src={Image3} alt="Image3" className="mobile__slider__image"/>
        </div>
      </MobileView>
    </>
  );
}