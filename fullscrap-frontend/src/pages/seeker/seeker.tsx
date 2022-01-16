import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Search from "../../components/search/search";
import "./seeker.scss";

const Seeker = () => {
  const navigate = useNavigate();

  const onClickSearch = () => {
    navigate("result");
  };

  return (
    <div className="seeker">
      <main>
        <h3>Identifica perfiles de las personas con un solo link</h3>
        <h1>FullScrap</h1>
        <Search onSearch={onClickSearch}></Search>
        <p className="divider">o</p>
        <Button buttonType="secondary">Buscar y comparar</Button>
      </main>
      <footer>
        <p>
          Hecho con &lt;3 por <strong>FullStackOverflow</strong>
        </p>
      </footer>
    </div>
  );
};

export default Seeker;
