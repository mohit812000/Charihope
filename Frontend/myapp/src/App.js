import "./App.css";
import Appbar from "./components/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Footer from "./components/Footer";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import SingleBlog from "./components/news/SingleBlog";
import Category from "./components/home/Category";
import LatestSingle from "./components/home/LatestSingle";
import DonationPage from "./components/home/DonationPage";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/compaign" element={<Campaign/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/single-blog/:blog_id" element={<SingleBlog/>} />
          <Route path="/category" element={<Category/>}/>
          <Route path="/latest-single/:category_name" element={<LatestSingle/>} />
          <Route path="/donation/:donation_id" element={<DonationPage/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
