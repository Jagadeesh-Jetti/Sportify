import './App.css';
import Footer from './components/footer';
import { Navbar } from './components/navbar';
import { Facilities } from './pages/facilities';
import { Login } from './pages/loginpage';
import { Signup } from './pages/signuppage';

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
    </>
  );
}

export default App;
