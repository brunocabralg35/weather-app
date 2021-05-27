import React, { useState, useEffect, useContext } from "react";
import Lottie from "react-lottie";
import { WeatherContext } from "../components/WeatherContext";
import {
  LoadingOptions,
  Rainy,
  Nublado,
  Thunder,
  Sunny,
  At_night,
} from "../assets/animations/Loadings";

export default function Home() {
  const [clima] = useContext(WeatherContext);
  const [isReady, setIsReady] = useState(false);

  const [arrayRainy] = useState([
    "5",
    "6",
    "7",
    "9",
    "10",
    "11",
    "12",
    "17",
    "35",
    "40",
    "42",
    "43",
    "45",
    "46",
  ]);
  const [arrayThunder] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "14",
    "37",
    "38",
    "39",
    "47",
  ]);
  const [arrayNublado] = useState([
    "8",
    "13",
    "15",
    "16",
    "18",
    "20",
    "22",
    "25",
    "26",
    "28",
    "29",
    "30",
    "33",
    "41",
  ]);
  const [arraySunny] = useState([
    "19",
    "21",
    "23",
    "24",
    "27",
    "31",
    "32",
    "34",
    "36",
    "44",
  ]);

  const [condRainy, setCondRainy] = useState([]);
  const [condThunder, setCondThunder] = useState([]);
  const [condNublado, setCondNublado] = useState([]);
  const [condSunny, setCondSunny] = useState([]);
  const [anim, setAnim] = useState(Sunny);

  function verificaTempo() {
    setCondRainy(
      arrayRainy.filter((elemento) => {
        return elemento === clima.condicao;
      })
    );
    setCondThunder(
      arrayThunder.filter((elemento) => {
        return elemento === clima.condicao;
      })
    );
    setCondNublado(
      arrayNublado.filter((elemento) => {
        return elemento === clima.condicao;
      })
    );
    setCondSunny(
      arraySunny.filter((elemento) => {
        return elemento === clima.condicao;
      })
    );

    if (condRainy.length !== 0) {
      setAnim(Rainy);
    }

    if (condThunder.length !== 0) {
      setAnim(Thunder);
    }

    if (condNublado.length !== 0) {
      setAnim(Nublado);
    }

    if (condSunny.length !== 0) {
      setAnim(Sunny);
    }
  }

  var data = new Date();
  var hora = data.getHours();

  useEffect(() => {
    verificaTempo();
  }, [clima.condicao]);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  return isReady ? (
    <div className="container">
      <h1>WeatherApp</h1>
      <div className="section1">
        <div className="animationBox">
          <Lottie
            options={hora > 18 ? At_night : anim}
            height={200}
            width={200}
          />
        </div>
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
