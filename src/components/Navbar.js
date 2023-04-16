import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav>
      <ul>
          <li>
          <Link to={`home`}>Strona główna</Link>
          </li>
          <li>
          <Link to={`contact`}>Kontakt</Link>
          </li>
      </ul>
    </nav>
  );
}