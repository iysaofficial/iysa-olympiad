import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";


function App() {
  return (
    <>
    <NavbarComp/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
      </Routes>
    </Router>
    <FooterComp/>
    </>
  );
}

export default App;
