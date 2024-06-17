import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUsPage/AboutUsPage';
import ContactUs from './pages/ContactUsPage/ContactUsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pushpa-kaju-home" />} />
          <Route path="/pushpa-kaju-home" element={<Home />} />
          <Route path="/pushpa-kaju-about" element={<AboutUs />} />
          <Route path="/pushpa-kaju-contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
