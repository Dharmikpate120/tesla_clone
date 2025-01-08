import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Energy from "./Pages/Energy";
import Design from "./Pages/Design";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/energy/design" element={<Design />} />
          <Route path="/energy" element={<Energy />}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
