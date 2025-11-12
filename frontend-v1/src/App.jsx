import './App.css';
import Footer from './components/footer';
import { Navbar } from './components/navbar';
import { Login } from './pages/loginpage';

function App() {
  return (
    <>
      <Navbar />
      <div className="p-30">
        <div className="text-4xl font-bold flex gap-3 h-screen">
          Play like never before,
          <div className="text-green-600"> Anytime. Anywhere</div>
        </div>
      </div>
      <Footer />

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
