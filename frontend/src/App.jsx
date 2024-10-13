import "./App.css";
import { Navbar } from "./components/layouts-components/Navbar";
import { Login } from "./components/modals-components/Login";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Login />
    </div>
  );
}

export default App;
