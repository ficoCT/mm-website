import { BrowserView, MobileView } from "react-device-detect";

export default function ContactDetails() {

  return (
   <>
       <BrowserView>
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