import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import Category from "./pages/Category.jsx";
import SinglePost from "./pages/SinglePost.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post" element={<SinglePost />}>
            <Route path=":id" element={<SinglePost />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/addpost" element={<AddProduct />} />
                </Routes>
              </>
            }
          />

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
