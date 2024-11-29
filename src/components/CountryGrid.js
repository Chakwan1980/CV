import React, { useState, useEffect } from "react";
import styles from "./CountryGrid.module.css";
import { CountryCard } from "./CountryCard";
import Spiner from "./Spiner";
import { useLocation } from "react-router-dom";


export function CountryGrid() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Obtiene los parámetros de la URL
  const query = new URLSearchParams(useLocation().search);

  const search = query.get("search")?.trim(); // Elimina espacios innecesarios del término de búsqueda

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true); // Inicia la carga
      setError(null); // Resetea el error antes de cada búsqueda
      try {
        const url = search
          ? `https://restcountries.com/v3.1/name/${encodeURIComponent(search)}`
          : `https://restcountries.com/v3.1/all`; // Usa encodeURIComponent para manejar caracteres especiales

        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`No results found for "${search}"`);
          } else {
            throw new Error("Failed to fetch countries");
          }
        }

        const data = await response.json();
        setCountries(data); // Actualiza los países

      } catch (err) {
        console.error("Error fetching countries:", err);
        setError(err.message); // Almacena el mensaje de error

        setCountries([]); // Limpia la lista de países
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    fetchCountries();
  }, [search]); // Ejecuta cada vez que "search" cambie

  // Renderizado Condicional
  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  return (
    <div>
      <ul className={styles.countryGrid}>
        {countries.map((country, index) => (
          <CountryCard key={country.cca3 || index} country={country} />
        ))}
      </ul>
    </div>
  );
}
