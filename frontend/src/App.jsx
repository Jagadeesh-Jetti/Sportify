import "./App.css";
import { Navbar } from "./components/layouts-components/Navbar";
import { Signup } from "./components/modals-components/signup";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-3xl text-red-500 p-5 text-center">
        Sportify Landing Page
      </div>
      <Signup />
    </>
  );
}

export default App;
