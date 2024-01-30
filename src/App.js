import logo from "./logo.svg";
import "./App.css";
import "./Dash.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Redirect,
} from "react-router-dom";
import CultureComponent from "./components/CultureComponent";
import LoginPage from "./pages/LoginPage";
import InsertCultureForm from "./components/InsertCulture";
import TerrainNonValide from "./components/TerrainNonValide";
import TerrainValide from "./components/TerrainValide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/terrainNonValide" element={<TerrainNonValide />} exact />
        <Route path="/terrainValide" element={<TerrainValide />} exact />
        <Route path="/culture" element={<InsertCultureForm />} exact />
        <Route path="/update" element={<CultureComponent />} exact />
      </Routes>
    </Router>
  );
}

export default App;
