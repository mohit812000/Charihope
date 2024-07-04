import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./components/auth/SignIn";
import LatestCampaign from "./components/Pages/latestcampaign/LatestCampaign";
import News from "./components/Pages/news/News";
import User from "./components/Pages/user/User";
import Categories from "./components/Pages/category/Categories";
import AddCategory from "./components/Pages/category/AddCategory";
import EditCategory from "./components/Pages/category/EditCategory";
import AddCampaign from "./components/Pages/latestcampaign/AddCampaign";
import EditCampaign from "./components/Pages/latestcampaign/EditCampaign";
import AddNews from "./components/Pages/news/AddNews";
import EditNews from "./components/Pages/news/EditNews";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/campaign" element={<LatestCampaign />} />
            <Route path="/news" element={<News />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/user" element={<User />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route
              path="/edit-category/:category_id"
              element={<EditCategory />}
            />
            <Route path="/add-campaign" element={<AddCampaign />} />
            <Route path="/edit-campaign/:edit_id" element={<EditCampaign />} />
            <Route path="/add-news" element={<AddNews />} />
            <Route path="/edit-news/:edit_id" element={<EditNews/>} />
            <Route path="/" element={<Dashboard/>} />
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Route>
        </Routes>
      </Router>
      {/* <SidebarComp/> */}
    </div>
  );
}

export default App;
