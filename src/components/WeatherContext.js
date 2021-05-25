import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  let url = "https://api.hgbrasil.com/weather?key=426890c0&user_ip=remote";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setClima({ cidade: data.results.city, temperatura: data.results.temp, condicao: data.results.condition_code });
    })
    .catch((err) => console.log(err));

  const [clima, setClima] = useState({
    cidade: null,
    temperatura: null,
    condicao: null
  });

  return (
    <WeatherContext.Provider value={[clima, setClima]}>
      {props.children}
    </WeatherContext.Provider>
  );
}
