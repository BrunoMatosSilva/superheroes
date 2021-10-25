import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import iconstar from "../../assets/images/staricon.png";
import { Content } from "../../styles/View/styles";
import { GlobalStyle } from "../../styles/globals";
import { AppContext } from "../../contexts/AppContext";

const Heroes = () => {
  const [heroe, setHeroe] = useState(null);
  const { toggleTheme, theme } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
    )
      .then((r) => r.json())
      .then((json) => {
        setHeroe(json);
      });
  }, [id]);

  if (!heroe) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Content>
        <button className="button">
          <Link to="/">Voltar</Link>
        </button>

        <section>
          <img src={heroe.images.md} alt="avatar heroi" />
          <div>
            <h1>{heroe.name}</h1>
            <h2>Name:</h2>
            <span>{heroe.biography.fullName}</span>
            <h2>Raça:</h2>
            <span>{heroe.appearance.race}</span>
            <h2>Primeira Aparição</h2>
            <span>{heroe.biography.firstAppearance}</span>
            <h2>Trabalhos:</h2>
            <span>{heroe.work.occupation}</span>
          </div>
          <button type="button">
            <img src={iconstar} alt="favorito" className="btStar" />
          </button>
        </section>
      </Content>
    </ThemeProvider>
  );
};

export default Heroes;
