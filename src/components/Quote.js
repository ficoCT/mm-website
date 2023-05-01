import { BrowserView, MobileView } from "react-device-detect";

export default function Quote() {

  return (
    <>
      <BrowserView>
        <div className="quote center text-center">
          <span className="quoteText ml-2">
            Dopóki walczysz jesteś zwycięzcą 
          </span> <br />
          <span className="quoteAuthor">
            - św. Augustyn
          </span>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile__quote center text-center">
          <span className="quoteText ml-2">
            Dopóki walczysz jesteś zwycięzcą 
          </span> <br />
          <span className="quoteAuthor">
            - św. Augustyn
          </span>
        </div>
      </MobileView>
    </>
  );
}