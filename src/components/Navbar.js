import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav>
      <ul>
          <li>
          <Link to={`home`}>Strona główna</Link>
          </li>
          <li>
          <Link to={`courses`}>Kursy szkolenia</Link>
          </li>
          <li>
          <Link to={`service`}>Usługi</Link>
          </li>
          <li>
          <Link to={`contact`}>Kontakt</Link>
          </li>
          <li>
          <Link to={`contact`}>Facebook Instagram</Link>
          </li>
      </ul>
    </nav>
  );
}