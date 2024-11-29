import React, { useState, useEffect } from "react";
import "./CountryList.css";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llama a la API de REST Countries para obtener los datos de todos los países
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => setCountries(data)) // aqui llega el objeto que llego arriba como .json y se almacena en data que se alamacena en el estado setCountries(data)
      .catch((error) => setError(error.message));
  }, []);

  // Renderiza el contenido
  return (
    <div>
      {" "}
      <h1>Lista de Países</h1>
      <div>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {/* Muestra la lista de países */}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {countries.map((country, index) => (
            <li
              key={index}
              style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
            >
              <h2>{country.name.common}</h2>
              <img
                src={country.flags.png}
                alt={`Bandera de ${country.name.common}`}
                width="350"
                height="250"
                style={{ borderRadius: "5px", marginTop: "10px" }}
              />
              <p>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
              <p>
                <strong>Región:</strong> {country.region}
              </p>
              <p>
                <strong>Población:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryList;
