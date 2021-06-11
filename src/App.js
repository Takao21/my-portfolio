import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { OverlayIntro } from "./common_components/OverlayIntro";
import { PageFooter } from "./common_components/PageFooter";
import { CurrentPage } from "./components/CurrentPage";

function App() {
  const [overlayActive, setOverlayActive] = useState(true);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <OverlayIntro setOverlayActive={setOverlayActive} />
        {!overlayActive && <CurrentPage />}
        {!overlayActive && <PageFooter />}
      </div>
    </Router>
  );
}

export default App;
