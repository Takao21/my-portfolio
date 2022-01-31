import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { PageFooter } from "./common_components/PageFooter";
import { ScrollTopButton } from "./common_components/ScrollTopButton";
// eslint-disable-next-line no-unused-vars
import { CurrentPage, MemoizedCurrentPage } from "./components/CurrentPage";

export const VwContext = React.createContext(0);
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const [openNav, setOpenNav] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setOpenNav(false);
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

    console.info(
      "Source code for this project: https://github.com/Takao21/my-portfolio . Please check it out!"
    );
  }, []);

  return (
    <VwContext.Provider value={windowSize}>
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
          {scrolled && <ScrollTopButton />}
        </div>
      </Router>
    </VwContext.Provider>
  );
}

export default App;
