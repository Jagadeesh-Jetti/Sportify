import './App.css';
import { Navbar } from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="p-30">
        <div className="text-4xl font-bold flex gap-3">
          Play like never before,
          <div className="text-green-600"> Anytime. Anywhere</div>
        </div>
      </div>
    </>
  );
}

export default App;
