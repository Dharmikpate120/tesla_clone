import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Energy from "./Pages/Energy";
import Design from "./Pages/Design";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energy/design" element={<Design />} />
          <Route path="/energy" element={<Energy />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
