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
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      {console.log("Logging env", process.env.REACT_APP_PUBLIC_URL)}
      <div className="App">
        <OverlayIntro setOverlayActive={setOverlayActive} />
        {!overlayActive && <NavBar />}
        {!overlayActive && <CurrentPage />}
        {!overlayActive && <PageFooter />}
      </div>
    </Router>
  );
}

export default App;
