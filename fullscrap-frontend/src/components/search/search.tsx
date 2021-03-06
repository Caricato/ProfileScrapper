import { useState } from "react";
import Button from "../button/button";
import "./search.scss";

export interface ISearch {
  onSearch: any;
}

const Search = ({ onSearch }: ISearch) => {
  const [url, setUrl] = useState("");

  const onSearchText = () => {
    if (
      url.startsWith("https://www.linkedin.com/in/") ||
      url.startsWith("www.linkedin.com/in/")
    )
      onSearch(url);
    else alert("Url no válido");
  };

  return (
    <div className="search">
      <p>Ingresa un perfil de LinkedIn</p>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="www.linkedin.com/usuario"
      />
      <Button onClick={onSearchText}>Buscar</Button>
    </div>
  );
};

export default Search;
