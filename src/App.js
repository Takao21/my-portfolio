import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { OverlayIntro } from "./common_components/OverlayIntro";
import { PageFooter } from "./common_components/PageFooter";
import { ScrollTopButton } from "./common_components/ScrollTopButton";
import { CurrentPage } from "./components/CurrentPage";

function App() {
  const [overlayActive, setOverlayActive] = useState(false); // !!! Set default to true and edit css for document scroll if you use the overlay intro
  const [scrolled, setScrolled] = useState(false);

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
    return () => {
      document.removeEventListener("scroll");
    };
  }, []);

  return (
    <Router>
      {console.log("Logging env", process.env.REACT_APP_PUBLIC_URL)}
      <div className="App">
        {/* <OverlayIntro setOverlayActive={setOverlayActive} /> */}
        {!overlayActive && <NavBar />}
        {!overlayActive && <CurrentPage />}
        {!overlayActive && <PageFooter />}
        {!overlayActive && scrolled && <ScrollTopButton />}
      </div>
    </Router>
  );
}

export default App;
