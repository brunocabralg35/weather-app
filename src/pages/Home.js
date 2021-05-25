import React, { useState, useEffect, useContext } from "react";
import Lottie from "react-lottie";
import animation from "../assets/animations/animation";
import { WeatherContext } from "../components/WeatherContext";
import { LoadingOptions, Rainy, Nublado, Thunder, Sunny, At_night } from "../assets/animations/Loadings";

export default function Home() {
  const [clima] = useContext(WeatherContext);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  var data = new Date();
  var hora = data.getHours();

  return isReady ? (
    <div className="container">
      <h1>WeatherApp</h1>
      <div className="section1">
      <Lottie options={(hora > 18) ? At_night :  Sunny } height={200} width={200} />
        <p className="cidadeText">{clima.cidade}</p>
        <p className="temperaturaText">{clima.temperatura} °C</p>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1>WeatherApp</h1>
      <div className="section1">
        <div className="loadingBox">
          <Lottie options={LoadingOptions} height={250} width={250} />
        </div>
      </div>
    </div>
  );
}
