import Home from "./Pages/Home.jsx";
import About from "./Pages/about.jsx";
import Cars from "./Pages/cars.jsx";
import Book from "./Pages/book.jsx";
import AdminPage from "./Pages/AddCarForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/book" element={<Book />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
