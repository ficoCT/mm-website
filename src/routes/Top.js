import Name  from "../components/Name";
import Navbar  from "../components/Navbar";

export default function Top() {

  return (
    <div className="container d-flex flex-column  mt-3">
      <Name className="justify-self-center"/> < br/>
      <Navbar /> < br/>
    </div>
  );
}