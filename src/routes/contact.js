import ContactDetails  from "../components/ContactDetails";
import { BrowserView, MobileView } from "react-device-detect";

export default function Contact() {

  return (
    <>
      <BrowserView>
        <div className="container content">
          <ContactDetails /> < br/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__container content">
          <ContactDetails /> < br/>
        </div>
      </MobileView>  
   </>
  );
}