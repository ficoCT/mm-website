import ContactUs  from "../components/ContactUs";
import Slider  from "../components/Slider";
import Description  from "../components/Description";

export default function Home() {

  return (
    <div className="container content">
      <ContactUs /> < br/>
      <Slider /> < br/>
      <Description /> < br/>
    </div>
  );
}