import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import usePersistedTheme from "../../utils/usePersistedTheme";
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import iconstar from '../../assets/images/staricon.png';
import { Content } from "../../styles/View/styles";


const Heroes = () => {
    const [heroe, setHeroe] = useState(null);
    const [theme, setTheme] = usePersistedTheme('theme', light);
    const { id } = useParams();

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
            .then((r) => r.json())
            .then((json) => {
                setHeroe(json);
            });
    }, [id]);

    if (!heroe) {
        return null
    }

    return (
        <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <Content>
                <button className="button">
                    <Link to="/listhero"><a>Voltar</a></Link>
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
                    <button type="button" ><img src={iconstar} className="btStar" /></button>
                </section>
            </Content>
        </ThemeProvider>
    )
}

export default Heroes;