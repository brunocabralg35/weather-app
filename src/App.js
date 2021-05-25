import React from "react";
import Home from "./pages/Home";
import { WeatherProvider } from "./components/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div>
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
