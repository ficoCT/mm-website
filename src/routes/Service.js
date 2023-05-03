import ServiceDetails  from "../components/ServiceDetails";
import { BrowserView, MobileView } from "react-device-detect";

export default function Service() {

  return (
    <>
      <BrowserView>
        <div className="container content">
          <ServiceDetails /> < br/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__container content">
          <ServiceDetails /> < br/>
        </div>
      </MobileView>
    </>
  );
}