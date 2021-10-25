import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { AppContext } from "../contexts/AppContext";

import spinner from "../assets/images/Spinner.gif";
import { Content, ContentList, ContentSearch } from "../styles/ListHero/style";
import iconstar from "../assets/images/staricon.png";
import Header from "../components/Header";

const Home = () => {
  const { toggleTheme, handleChange, theme, listHeroe, loading } = useContext(
    AppContext
  );

  if (loading) {
    return (
      <Content>
        <img className="contentLoading" src={spinner} alt="Loading" />
      </Content>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <ContentSearch>
        <input
          type="search"
          placeholder="Procure o seu Héroi"
          onChange={handleChange}
        />
      </ContentSearch>
      <GlobalStyle />
      <ContentList>
        {listHeroe.map((heroe) => {
          return (
            <Link to={`/view/heroes/${heroe.id}`}>
              <div className="listBody" key={heroe.id}>
                <img src={heroe.images.sm} alt="avatar heroi" />
                <section>
                  <div>
                    <h2>{heroe.name}</h2>
                    <strong>Raça:</strong> <p>{heroe.appearance.race}</p>
                    <strong>Nome:</strong> <p>{heroe.biography.fullName}</p>
                    <strong>Editora:</strong> <p>{heroe.biography.publisher}</p>
                  </div>
                  <button type="button">
                    <img src={iconstar} alt="favorito" className={`btStar`} />
                  </button>
                </section>
              </div>
            </Link>
          );
        })}
      </ContentList>
    </ThemeProvider>
  );
};

export default Home;
