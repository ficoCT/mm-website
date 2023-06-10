import Image1 from "../assets/TraininImage1.jpg";
import Image2 from "../assets/TraininImage2.jpg";
import Image3 from "../assets/TraininImage3.jpg";
import Image4 from "../assets/TraininImage4.jpg";
import Image5 from "../assets/TraininImage5.jpg";
import { BrowserView, MobileView } from "react-device-detect";

export default function Title() {

  return (
    <>
     <BrowserView>
      <span className="title mt-1">OFERUJEMY KURSY I SZKOLENIA DLA OSÓB INDYWIDUALNY, FIRM I INSTYTUCJI<br />
      Wszystkie nasze szkolenia wyróżnia symulacja WYSOKIEJ WIERNOŚCI</span><br />
        <div className="d-flex mt-2">
          <img src={Image1} alt="Image1" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">PIERWSZA POMOC PRZEDMEDYCZNA (BLS + AED) dla:</span>
            <ul className="text">
              <li>firm, instytucji</li>
              <li>szkół</li>
              <li>uczelni</li>
              <li>osób indywidualnych</li>
              <li>grup zorganizowanych</li>
            </ul>
            <span className="text">
              Zgodnie z Kodeks Karny Art. 162 § 1.
              Kto człowiekowi znajdującemu się w położeniu grożącym bezpośrednim niebezpieczeństwem utraty życia albo ciężkiego uszczerbku 
              na zdrowiu nie udziela pomocy, mogąc jej udzielić bez narażenia siebie lub innej osoby na niebezpieczeństwo utraty życia albo 
              ciężkiego uszczerbku na zdrowiu, podlega karze pozbawienia wolności do lat 3. 
            </span>
            <span className="text">
              Zgodnie z Kodeksem Pracy, art. 209 1. § 1, art. 237 11a w § 1 pkt 3, każdy pracodawca ma obowiązek wyznaczenia osoby, która
              będzie odpowiedzialna za udzielanie pierwszej pomocy w razie wypadku i obsługę apteczki.
            </span>
          </div>
        </div>
        <div className="d-flex mt-2">
          <img src={Image2} alt="Image2" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">Medyczne Ratownictwo Taktyczne M.R.T. w oparciu o wytyczne CoTCCC
            (poziom podstawowy; poziom rozszerzony)</span>
            <ul className="text">
              <li>Studentów Ratownictwa Medycznego</li>
              <li>Klas mundurowych</li>
              <li>Funkcjonariuszy oraz Żołnierzy</li>
              <li>Grup ASG</li>
              <li>Związków Strzeleckich</li>
              <li>Służb mundurowych</li>
              <li>Agencji Ochrony</li>
            </ul>
            <span className="text">
              Wszystkich którzy chcą zapoznać się z innowatorskimi sposobami udzielania pierwszej pomocy w sytuacjach kryzysowych
            </span>
          </div>
        </div>
        <div className="d-flex mt-2">
          <img src={Image3} alt="Image3" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">Pierwsza pomoc w off-road</span>
            <span className="text"> Dla wszystkich pasjonatów 4x4, QUAD, OFF-ROAD</span>
          </div>
        </div>
        <div className="d-flex mt-2">
          <img src={Image4} alt="Image4" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">Medyczne Szkolenia Specjalistyczne</span>
          </div>
        </div>
        <div className="d-flex mt-2">
          <img src={Image5} alt="Image5" className="image mr-2"/>
          <div className="p-2">
            <span className="title mt-1">Szkolenie SURVIVALOWE</span>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <span className="title mt-1">OFERUJEMY KURSY I SZKOLENIA DLA OSÓB INDYWIDUALNY, FIRM I INSTYTUCJI<br />
        Wszystkie nasze szkolenia wyróżnia symulacja WYSOKIEJ WIERNOŚCI</span><br />
          <div className="d-flex flex-column mt-2">
            <img src={Image1} alt="Image1" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">PIERWSZA POMOC PRZEDMEDYCZNA (BLS + AED) dla:</span>
              <ul className="text">
                <li>firm, instytucji</li>
                <li>szkół</li>
                <li>uczelni</li>
                <li>osób indywidualnych</li>
                <li>grup zorganizowanych</li>
              </ul>
              <span className="text">
                Zgodnie z Kodeks Karny Art. 162 § 1.
                Kto człowiekowi znajdującemu się w położeniu grożącym bezpośrednim niebezpieczeństwem utraty życia albo ciężkiego uszczerbku 
                na zdrowiu nie udziela pomocy, mogąc jej udzielić bez narażenia siebie lub innej osoby na niebezpieczeństwo utraty życia albo 
                ciężkiego uszczerbku na zdrowiu, podlega karze pozbawienia wolności do lat 3. 
              </span>
              <span className="text">
                Zgodnie z Kodeksem Pracy, art. 209 1. § 1, art. 237 11a w § 1 pkt 3, każdy pracodawca ma obowiązek wyznaczenia osoby, która
                będzie odpowiedzialna za udzielanie pierwszej pomocy w razie wypadku i obsługę apteczki.
              </span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <img src={Image2} alt="Image2" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Medyczne Ratownictwo Taktyczne M.R.T. w oparciu o wytyczne CoTCCC
              (poziom podstawowy; poziom rozszerzony)</span>
              <ul className="text">
                <li>Studentów Ratownictwa Medycznego</li>
                <li>Klas mundurowych</li>
                <li>Funkcjonariuszy oraz Żołnierzy</li>
                <li>Grup ASG</li>
                <li>Związków Strzeleckich</li>
                <li>Służb mundurowych</li>
                <li>Agencji Ochrony</li>
              </ul>
              <span className="text">
                Wszystkich którzy chcą zapoznać się z innowatorskimi sposobami udzielania pierwszej pomocy w sytuacjach kryzysowych
              </span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <img src={Image3} alt="Image3" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Pierwsza pomoc w off-road</span>
              <span className="text"> Dla wszystkich pasjonatów 4x4, QUAD, OFF-ROAD</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <img src={Image4} alt="Image4" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Medyczne Szkolenia Specjalistyczne</span>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <img src={Image5} alt="Image5" className="mobile__image mr-2"/>
            <div className="p-2">
              <span className="title mt-1">Szkolenie SURVIVALOWE</span>
            </div>
          </div>
      </MobileView>
    </>
  );
}