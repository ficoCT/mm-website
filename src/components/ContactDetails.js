import { BrowserView, MobileView } from "react-device-detect";
import Image1 from "../assets/ContactImage1.jpg";

export default function ContactDetails() {

  return (
   <>
       <BrowserView>
        <div className="d-flex flex-column center mt-2">
          <div>
            KONTAKT
            <div>
              Medyczne Centrum Szkoleniowo Usługowe TacMed Rescue Team <br />
              Mariusz Matla 
            </div>
            <div>
              ul. Krakowska 377 <br />
              43-300 Bielsko-Biała
            </div>
            <div>
              NIP 7991929484 <br />
              tel: +48 539 700 112
            </div>
          </div>
          <div className="d-flex flex-column text-center">
            Posiadamy Ośrodek Szkolenia
            <img src={Image1} alt="Image1" className="imageContact mr-2"/>
          </div>
        </div>
      </BrowserView>
      <MobileView>
       <div>
        KONTAKT
          <div>
            Medyczne Centrum Szkoleniowo Usługowe TacMed Rescue Team <br />
            Mariusz Matla 
          </div>
          <div>
            ul. Krakowska 377 <br />
            43-300 Bielsko-Biała
          </div>
          <div>
            NIP 7991929484 <br />
            tel: +48 539 700 112
          </div>
          </div>
        <div>
          Posiadamy Ośrodek Szkolenia
        </div>
      </MobileView>
    </>
  );
}