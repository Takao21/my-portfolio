import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { PageFooter } from "./common_components/PageFooter";
import { ScrollTopButton } from "./common_components/ScrollTopButton";
import { CurrentPage } from "./components/CurrentPage";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const [openNav, setOpenNav] = useState(false);

  /*Logic to show ScrollTopButton if document is scrolled. */
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrollPosition = document.scrollingElement.scrollTop;
      if (scrollPosition >= 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  useEffect(() => {
    const temp = window.location.pathname.split("/");
    const currentPath = "/" + temp[temp.length - 1];
    setActivePage(currentPath);
  }, []);

  return (
    <Router>
      {/* <div className="d-none d-lg-block App"> */}
      <div className="App">
        <NavBar
          activePage={activePage}
          setActivePage={setActivePage}
          openNav={openNav}
          setOpenNav={setOpenNav}
        />
        <CurrentPage />
        <PageFooter setActivePage={setActivePage} />
        {scrolled && <ScrollTopButton />}
      </div>
      {/* <div className=".d-lg-none .d-xl-block App text-center dev-note">
        <strong>Developer's Note</strong>: This website is under development and
        currently only available on large screens.
      </div> */}
    </Router>
  );
}

export default App;
