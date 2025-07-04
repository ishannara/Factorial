import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Factorial from "./screens/Factorial";
import PrimeNumber from "./screens/PrimeNumber";
import Pallendrome from "./screens/Pallendrome";
import EvenOdd from "./componant/EvenOdd";
import CounterLimte from "./componant/CounterLimte";
import QuizApp from "./componant/QuizApp";
import DynamicColor from "./componant/DynamicColor";
import CounterStepControl from "./components/CounterStepControl";
import { CharacterCount } from "./components/CharacterCount";
import PasswordStrengthCheck from "./components/PasswordStrengthCheck";
import Show_HidePassword from "./components/Show_HidePassword";
import TemperatureConvertor from "./components/TemperatureConvertor";
import LiveClock from "./components/LiveClock";
import SearchFilter from "./components/SearchFilter";
import QuoteGentor from "./components/QuoteGentor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/factorial" element={<Factorial />} />
          <Route path="/primenumber" element={<PrimeNumber />} />
          <Route path="/pallendrome" element={<Pallendrome />} />
          <Route path="/evenodd" element={<EvenOdd />} />
          <Route path="/counter" element={<CounterLimte />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/dynamicolor" element={<DynamicColor />} />
          <Route path="/counterstepcontrol" element={<CounterStepControl />} />
          <Route path="/characterCount" element={<CharacterCount />} />
          <Route path="/passwordStrenght" element={<PasswordStrengthCheck />} />
          <Route path="/show_hidepass" element={<Show_HidePassword />} />
          <Route
            path="/temperatureconvertor"
            element={<TemperatureConvertor />}
          />
          <Route path="/liveclock" element={<LiveClock />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
          <Route path="/quateGantor" element={<QuoteGentor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
