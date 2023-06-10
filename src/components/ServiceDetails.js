import Image1 from "../assets/ServiceImage1.jpg";
import Image2 from "../assets/ServiceImage2.jpg";
import Image3 from "../assets/ServiceImage3.jpg";
import Image4 from "../assets/ServiceImage4.jpg";
import Image5 from "../assets/ServiceImage5.jpg";
import Image6 from "../assets/TraininImage6.jpg";
import Image7 from "../assets/TraininImage7.jpg";
import { BrowserView, MobileView } from "react-device-detect";

export default function ServiceDetails() {

  return (
    <>
      <BrowserView>
          <div className="d-flex mt-2">
            <img src={Image1} alt="Image1" className="image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Oferujemy wynajem Ambulansu z Ratownikiem Medycznym posiadającym uprawnienia do kierowania pojazdami uprzywilejowanymi.
              Praktykującym w Zespołach Ratownictwa Medycznego.</span>
              </div>
          </div>
          <div className="d-flex mt-2">
              <img src={Image2} alt="Image2" className="image mr-2"/>
                <div className="p-2">
                <span className="title mt-1">Oferujemy wynajęcie sprzętu do szkolenia z pierwszej pomocy:</span>
                <ul className="text">
                  <li>Fantomy dorosłych,</li>
                  <li>fantom dziecka,</li>
                  <li>fantom niemowlęcia,</li> 
                  <li>fantomy całopostaciowe</li>
                  <li>deska ortopedyczna,</li> 
                  <li>szyny kramera, </li>
                  <li>kołnierz ortopedyczny,</li> 
                  <li>treningowy defibrylator AED,</li>
                  <li>nosze SKED</li>
                  <li>nosze TALON</li>
                </ul>
              </div>
          </div>
          <div className="d-flex mt-2">
              <img src={Image3} alt="Image3" className="image mr-2"/>
              <div className="p-2">
                <span className="title mt-1">Wynajem namiotu NS64</span>
                  <span className="text">
                    Namiot Wojskowy NS 64, namiot w stanie bardzo dobrym.
            
                    Namiot składa się z: stelaż stalowy + czasza brezentowa impregnowana + niebieska podpinka wewnątrz.
                    Wymiary ok. 5,5m x 4,5m x 2,5m.
                    Powierzchnia namiotu to ok. 30m2.
            
                    Konstrukcja namiotu jest samonośna co pozwala na przestawianie namiotu po jego rozłożeniu.
            
                    Namiot posiada wiele zastosowań:
                    - sypialna
                    - stołówka
                    - namiot eventowy
                    - targi, przyjęcia, uroczystości
                    - imprezy plenerowe
                    - wieczory kawalerskie i panieńskie
            
                    Możliwy transport namioty do wyznaczonego miejsca oraz jego pełna obsługa tj. rozłożenie oraz złożenie.
                    
                    Cena wynajmu ze względu na wiele opcji ustalana jest indywidualnie.
                  </span>
              </div>
          </div>
          <div className="d-flex mt-2">
            <img src={Image4} alt="Image4" className="image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">(Oferuję również usługi: wynajmu, szkolenia z pierwszej pomocy, organizacji imprez integracyjnych oraz innych)</span>
                <span className="text">POLECAM</span>
            </div>
          </div>
          <div className="d-flex mt-2">
            <img src={Image5} alt="Image5" className="image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Kierowca z karetką w POZ i Nocnej i Świąteczna Pomoc Lekarska</span>
            </div>
          </div>
          <div className="d-flex mt-2">
          <img src={Image6} alt="Image6" className="image mr-2"/>
          <div className="p-2">
          <span className="title mt-1">Osobisty Pakiet Medyczny</span>
           </div>
        </div>
        <div className="d-flex mt-2">
          <img src={Image7} alt="Image7" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">ORGANIZUJEMY RÓWNIEŻ</span>
            <ul className="text">
              <li>Spotkania integracyjne z elementami kursu pierwszej pomocy przedmedycznej</li>
              <li>Pierwsza pomoc w ramach zabawy na urodzinach u Twojego dziecka "Mały Ratownik"</li>
              <li>Pokazy Ratownictwa Taktycznego na zlotach Militarnych</li>
            </ul>
          </div>
        </div>
      </BrowserView>
      <MobileView>
            <div className="d-flex flex-column mt-2">
              <img src={Image1} alt="Image1" className="mobile__image mr-2"/>
              <div className="p-2">
                <span className="title mt-1">Oferujemy wynajem Ambulansu z Ratownikiem Medycznym posiadającym uprawnienia do kierowania pojazdami uprzywilejowanymi.
                Praktykującym w Zespołach Ratownictwa Medycznego.</span>
                </div>
            </div>
            <div className="d-flex flex-column mt-2">
                <img src={Image2} alt="Image2" className="mobile__image mr-2"/>
                <div className="p-2">
                  <span className="title mt-1">Oferujemy wynajęcie sprzętu do szkolenia z pierwszej pomocy:</span>
                  <ul className="text">
                    <li>Fantomy dorosłych,</li>
                    <li>fantom dziecka,</li>
                    <li>fantom niemowlęcia,</li> 
                    <li>fantomy całopostaciowe</li>
                    <li>deska ortopedyczna,</li> 
                    <li>szyny kramera, </li>
                    <li>kołnierz ortopedyczny,</li> 
                    <li>treningowy defibrylator AED,</li>
                    <li>nosze SKED</li>
                    <li>nosze TALON</li>
                  </ul>
                </div>
            </div>
            <div className="d-flex flex-column mt-2">
                <img src={Image3} alt="Image3" className="mobile__image mr-2"/>
                <div className="p-2">
                  <span className="title mt-1">Wynajem namiotu NS64</span>
                    <span className="text">
                      Namiot Wojskowy NS 64, namiot w stanie bardzo dobrym.
              
                      Namiot składa się z: stelaż stalowy + czasza brezentowa impregnowana + niebieska podpinka wewnątrz.
                      Wymiary ok. 5,5m x 4,5m x 2,5m.
                      Powierzchnia namiotu to ok. 30m2.
              
                      Konstrukcja namiotu jest samonośna co pozwala na przestawianie namiotu po jego rozłożeniu.
              
                      Namiot posiada wiele zastosowań:
                      - sypialna
                      - stołówka
                      - namiot eventowy
                      - targi, przyjęcia, uroczystości
                      - imprezy plenerowe
                      - wieczory kawalerskie i panieńskie
              
                      Możliwy transport namioty do wyznaczonego miejsca oraz jego pełna obsługa tj. rozłożenie oraz złożenie.
                      
                      Cena wynajmu ze względu na wiele opcji ustalana jest indywidualnie.
                    </span>
                </div>
            </div>
            <div className="d-flexflex-column mt-2">
              <img src={Image4} alt="Image4" className="mobile__image mr-2"/>
              <div className="p-2">
                <span className="title mt-1">(Oferuję również usługi: wynajmu, szkolenia z pierwszej pomocy, organizacji imprez integracyjnych oraz innych)</span>
                  <span className="text">POLECAM</span>
              </div>
            </div>
            <div className="d-flex flex-column mt-2">
              <img src={Image5} alt="Image5" className="mobile__image mr-2"/>
              <div className="p-2">
                <span className="title mt-1">Kierowca z karetką w POZ i Nocnej i Świąteczna Pomoc Lekarska</span>
              </div>
            </div>
            <div className="d-flex flex-column mt-2">
            <img src={Image6} alt="Image6" className="mobile__image mr-2"/>
            <div className="p-2">
            <span className="title mt-1">Osobisty Pakiet Medyczny</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <img src={Image7} alt="Image7" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">ORGANIZUJEMY RÓWNIEŻ</span>
              <ul className="text">
                <li>Spotkania integracyjne z elementami kursu pierwszej pomocy przedmedycznej</li>
                <li>Pierwsza pomoc w ramach zabawy na urodzinach u Twojego dziecka "Mały Ratownik"</li>
                <li>Pokazy Ratownictwa Taktycznego na zlotach Militarnych</li>
              </ul>
            </div>
          </div>
      </MobileView>
    </>
  );
}