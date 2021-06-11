import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { PageFooter } from "./common_components/PageFooter";
import { CurrentPage } from "./components/CurrentPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CurrentPage />
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
