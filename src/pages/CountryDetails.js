import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CountryDetails.module.css"; // Asegúrate de que el archivo de estilos esté correcto
import { API_URL } from "../utils/httpGet";
import Spinner from "../components/Spiner";



export function CountryDetails() {
  const { name } = useParams(); // Obtén el nombre del país desde la URL
  console.log(name)
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
   
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      
      .then((data) =>  { 
        console.log(data); 
         setCountries(data) })
    
      .catch((error) => setError(error.message));
      setIsLoading(false);
  }, []);

  // Si está cargando , muestra un mensaje de cargando
  if (isloading) {
    return <Spinner/>}

  // Filtra el país por el nombre (asegúrate de que `name` esté en el formato correcto)
  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  // Si el país no se encuentra
  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    

    <div className={styles.CountryDetails}>
        <div className={styles.header}> <h1>{country.name.common}</h1>  <hr></hr></div> <br></br>
     
   
      <img className={`${styles.col} ${styles.countryImage}`} 
        src={country.flags?.png}
        alt={country.name.common}
        width={500}
        height={650}
      />
 
      <div className={`${styles.col} ${styles.countryDetails}  `}>
        <p className= {styles.firstItem}>
          {" "}
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital[0] : "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Sub Region:</strong> {country.subregion}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages
            ? Object.values(country.languages).join(" , ")
            : "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Moneda:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(" , ")
            : "N/A"}
        </p>
        <p>
          <strong>Area:</strong> {country.area}
        </p>
      </div>
    </div>
  );
}
