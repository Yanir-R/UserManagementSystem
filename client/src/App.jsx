import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { AddEdit } from "./pages/AddEdit";
import { View } from "./pages/View";
import { About } from "./pages/About";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/add"} element={<AddEdit />} />
          <Route path={"/update/:id"} element={<AddEdit />} />
          <Route path={"/view/:id"} element={<View />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export { App };
