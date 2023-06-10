import Staff  from "../components/Staff";
import { BrowserView, MobileView } from "react-device-detect";

export default function Courses() {

  return (
    <>
      <BrowserView>
        <div className="container content">
          <Staff /> < br/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__container content">
          <Staff /> < br/>
        </div>
      </MobileView>  
    </>
  );
}