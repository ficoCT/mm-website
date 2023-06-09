import Training  from "../components/Training";
import { BrowserView, MobileView } from "react-device-detect";

export default function Courses() {

  return (
    <>
      <BrowserView>
        <div className="container content">
          <Training /> < br/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__container content">
          <Training /> < br/>
        </div>
      </MobileView>  
    </>
  );
}