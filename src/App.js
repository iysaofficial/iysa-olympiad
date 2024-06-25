import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
// import NewsPage from "./pages/news/NewsPage.jsx";
import NewsContentPage1 from "./pages/news/NewsContentPage1.jsx";



function App() {
  return (
    <>
    <NavbarComp/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />

        {/* News Start */}
        {/* <Route path='/NewsPage' element={<NewsPage/>}/> */}
        <Route path='/NewsContentPage1' element={<NewsContentPage1/>}/>
        {/* News End */}
        
      </Routes>
    </Router>
    <FooterComp/>
    </>
  );
}

export default App;
