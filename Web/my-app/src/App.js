
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectP from "./SelectP";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SelectP />} />
      <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
