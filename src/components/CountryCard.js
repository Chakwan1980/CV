import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";




export function CountryCard({ country }) {
  return (
   
    <li className={styles.CountryCard}>
   
   <Link to={`/country/${country.name.common}`}>
      <hr></hr>
      <p> <strong> {country.name.common}</strong></p>
      
      <img
        className={styles.CountryImage}
        width={250}
        height={250}
        src={country.flags.png}
        alt={country.name.common}
      />
     
      <div> <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</div>
      <div> <strong>Region:</strong> {country.region}</div>
      <div> <strong>Sub Region:</strong> {country.subregion}</div>
      <div> <strong> languages:</strong> {country.languages ? Object.values(country.languages).join(',') :"N/A"}</div>
      <div> <strong>Poblation:</strong> {country.population.toLocaleString()}</div> </Link>
    </li>
   
  );
}
