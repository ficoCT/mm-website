import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
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
          <Outlet />
        </div>
        <div id="detail"></div>
      </>
    );
  }