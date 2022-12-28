import "./App.css";
import Cart from "./pages/cart";
import Detail from "./pages/detail";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./assets/navigationbar";

function App() {
  return (
    <div>
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
