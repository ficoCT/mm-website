import ContactUs  from "../components/ContactUs";
import Slider  from "../components/Slider";
import Description  from "../components/Description";
import Quote  from "../components/Quote";
import { BrowserView, MobileView } from "react-device-detect";

export default function Home() {

  return (
    <>
      <BrowserView>
        <div className="container content d-flex flex-column align-items-center">
          <ContactUs /> < br/>
          <Slider /> < br/>
          <Quote /> < br/>
          <Description /> < br/>
        </div>
      </BrowserView>
      <MobileView>
      <div className="mobile__container content d-flex flex-column">
          <ContactUs /> < br/>
          <Slider /> < br/>
          <Quote /> < br/>
          <Description /> < br/>
        </div>
      </MobileView>
    </>
  );
}