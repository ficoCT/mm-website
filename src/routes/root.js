import { Outlet } from "react-router-dom";
import Top from "./Top";
import Footer  from "./Footer";

export default function Root() {
    return (
      <>
        <header>
          <Top />
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