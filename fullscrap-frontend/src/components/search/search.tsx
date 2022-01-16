import Button from "../button/button";
import "./search.scss";

export interface ISearch {
  onSearch: any;
}

const Search = ({ onSearch }: ISearch) => {
  return (
    <div className="search">
      <p>Ingresa un perfil de LinkedIn</p>
      <input type="text" placeholder="www.linkedin.com/usuario" />
      <Button onClick={onSearch}>Buscar</Button>
    </div>
  );
};

export default Search;
