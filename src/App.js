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

  useEffect(() => {
    // initiate current path in the URL as active page
    const temp = window.location.pathname.split("/");
    const currentPath = "/" + temp[temp.length - 1];
    setActivePage(currentPath);

    // event to track window scroll activity, for scrollToTop button
    document.addEventListener("scroll", (e) => {
      let scrollPosition = document.scrollingElement.scrollTop;
      if (scrollPosition >= 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App" onClick={() => openNav && setOpenNav(false)}>
        <NavBar
          activePage={activePage}
          setActivePage={setActivePage}
          openNav={openNav}
          setOpenNav={setOpenNav}
        />
        <CurrentPage />
        <PageFooter setActivePage={setActivePage} />
        {scrolled && <ScrollTopButton className="onTheTop" />}
      </div>
    </Router>
  );
}

export default App;
