import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animation from "../assets/animations/animation";

const LoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: animation.loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  let url = "https://api.hgbrasil.com/weather?key=426890c0&user_ip=remote";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCidade(data.results.city);
      setTemperatura(data.results.temp);
    })
    .catch((err) => console.log(err));

  const [cidade, setCidade] = useState();
  const [temperatura, setTemperatura] = useState();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  return isReady ? (
    <div className="container">
      <h1>WeatherApp</h1>
      <div className="section1">
        <p className="cidadeText">{cidade}</p>
        <p className="temperaturaText">{temperatura} °C</p>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1>WeatherApp</h1>
      <div className="section1">
        <div className="loadingBox">
          <Lottie options={LoadingOptions} height={200} width={200} />
        </div>
      </div>
    </div>
  );
}
