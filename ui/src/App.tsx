import "./App.scss";
import WeatherDisplay from "./scenes/WeatherDisplay/WeatherDisplay";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Is It Raining?</h1>
      <Routes>
        <Route index path="/" element={<Navigate to="/weather" />} />
        <Route path="weather" element={<WeatherDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
