import "./App.css";
import { Footer } from "./components/layouts-components/Footer";
import { Navbar } from "./components/layouts-components/Navbar";
import { Login } from "./components/modals-components/Login";
import { Signup } from "./components/modals-components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
