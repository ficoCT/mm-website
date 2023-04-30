import Image1 from "../assets/StaffImage1.jpg";
import Image2 from "../assets/StaffImage2.jpg";

export default function Staff() {

  return (
    <>
      <span className="training_title mt-1">KADRA INSTRUKTORSKA</span>
      <div className="d-flex mt-2">
          <img src={Image1} alt="Image1" className="image mr-2"/>
          <div className="p-2">
            <span className="training_title mt-1">"MATI"</span>
            <ul>
              <li>Ratownik Medyczny</li>
              <li>Kierowca pojazdów uprzywilejowanych</li>
              <li>Instruktor Ratownictwa Pola Walki</li>
              <li>Ratownik Pola Walki</li>
              <li>Wykładowca Akademicki (BLS+AED, Medycyna Pola Walki)</li>
              <li>Weteran V zmiany i XI zmiany PKW Afganistan</li>
              <li>Ukończył Kursy i szkolenia</li>
              <li>Tactical Combat Casualty Care - Military Provider Course NAEMT</li>
              <li>Kurs przetrwania w niskich temperaturach</li>
              <li>Szkolenie w zakresie medycznej ewakuacji lotniczej</li>
              <li>Techniki linowe Level 3</li>
              <li>Kurs jazdy off-road</li>
              <li>Kurs ITLS</li>
              <li>Kurs ALS</li>
            </ul>
            </div>
        </div>
      <div className="d-flex mt-2">
          <img src={Image2} alt="Image1" className="image mr-2"/>
          <div className="p-2">
            <span className="training_title mt-1">"LAJON"</span>
            <ul>
              <li>Ratownik Kwalifikowanej Pierwszej Pomocy</li>
              <li>Ratownik Pola Walki</li>
              <li>Weteran V zmiany i XI zmiany PKW Afganistan</li>
              <li>Instruktor JUDO, JU-JITSU</li>
              <li>Ukończył Kursy i szkolenia</li>
              <li>Techniki linowe</li>
              <li>Walka wręcz</li>
              <li>Krav Maga</li>
            </ul>
            </div>
        </div>
    </>
  );
}