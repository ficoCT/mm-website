import { Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer  from "../components/Footer";
import Name  from "../components/Name";

export default function Root() {
    return (
      <>
        <header>
          <Name />
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }