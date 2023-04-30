import Name  from "../components/Name";
import Navbar  from "../components/Navbar";
import ButtonNav  from "../components/ButtonNav";
import {useState} from "react";

export default function Top() {

  const [show, setShow] = useState();

  function showNavbar(s) {
      setShow(s);
  }

  return (
    <div className="container d-flex flex-column  mt-3">
      <ButtonNav onShowNavbar={showNavbar}/> 
      <Name /> < br/>
      <Navbar show={show}/> < br/>
    </div>
  );
}