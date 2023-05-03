import Training  from "../components/Training";
import Staff  from "../components/Staff";
import { BrowserView, MobileView } from "react-device-detect";

export default function Courses() {

  return (
    <>
      <BrowserView>
        <div className="container content">
          <Training /> < br/>
          <Staff /> < br/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__container content">
          <Training /> < br/>
          <Staff /> < br/>
        </div>
      </MobileView>  
    </>
  );
}