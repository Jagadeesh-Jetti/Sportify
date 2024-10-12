import "./App.css";
import { Navbar } from "./components/layouts-components/Navbar";
import { Signup } from "./components/modals-components/signup";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <Signup />
    </div>
  );
}

export default App;
