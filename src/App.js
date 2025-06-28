import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Factorial from "./screens/Factorial";
import PrimeNumber from "./screens/PrimeNumber";
import Pallendrome from "./screens/Pallendrome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/factorial" element={<Factorial/>} />
          <Route path="/primenumber" element={<PrimeNumber/>} />
          <Route path="/pallendrome" element={<Pallendrome/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
