import React, { useState, createContext, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  let url = `https://api.hgbrasil.com/weather?key=${api_key}&city_name=Vancouver,BC`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClima({
          cidade: data.results.city,
          temperatura: data.results.temp,
          condicao: data.results.condition_code,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [clima, setClima] = useState({
    cidade: null,
    temperatura: null,
    condicao: null,
  });

  return (
    <WeatherContext.Provider value={[clima, setClima]}>
      {props.children}
    </WeatherContext.Provider>
  );
}
