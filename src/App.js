import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./common_components/NavBar";
import { CurrentPage } from "./components/CurrentPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CurrentPage />
      </div>
    </Router>
  );
}

export default App;
