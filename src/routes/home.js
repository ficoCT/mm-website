import ContactUs  from "../components/ContactUs";
import Slider  from "../components/Slider";
import Description  from "../components/Description";
import Quote  from "../components/Quote";

export default function Home() {

  return (
    <div className="container content d-flex flex-column">
      <ContactUs /> < br/>
      <Slider /> < br/>
      <Quote /> < br/>
      <Description /> < br/>
    </div>
  );
}