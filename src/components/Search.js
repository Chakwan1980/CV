
import { API_URL } from "../utils/httpGet";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();

  // Lee el parámetro "search" de la URL
  const search = query.get("search") || "";

  // Sincroniza el estado del input con el parámetro "search"
  const [searchText, setSearchText] = useState(search);

  // Actualiza la URL cuando cambia "searchText"
  useEffect(() => {
    setQuery({ search: searchText });
  }, [searchText, setQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navega a la URL con el texto de búsqueda
    navigate(`/search?q=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
