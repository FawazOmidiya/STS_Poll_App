import "./App.css";
import Odds from "./Pages/Odds";
import Polls from "./Pages/Polls";
import Map from "./Pages/Map";
import Home from "./Pages/Home";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="odds" element={<Odds />} />
          <Route path="map" element={<Map />} />
          <Route path="polls" element={<Polls />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
