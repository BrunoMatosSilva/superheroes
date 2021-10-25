import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'
import usePersistedTheme from '../utils/usePersistedTheme';
import { GlobalStyle } from '../styles/globals';

import spinner from '../assets/images/Spinner.gif';
import { Content, ContentList, ContentSearch } from '../styles/ListHero/style';
import iconstar from '../assets/images/staricon.png';
import Header from '../components/Header';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const Home = () => {

    const [theme, setTheme] = usePersistedTheme('theme', light);
    const [listHeroe, setListHeroe] = useState([])
    const [initialHeroe, setInitialHeroe] = useState([])
    const [loading, setLoading] = useState(true);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
                const data = await response.json();
                setInitialHeroe(data)
                setListHeroe(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        };
        fetchHeroes();
    }, [])



    const handleChange = ({ target }) => {
        const lowerBusca = target.value.toLowerCase();

        if (!target.value) {
            setListHeroe(initialHeroe)
            return
        }

        const filterHeroes = listHeroe.filter((heroe) =>
            heroe.name.toLowerCase().includes(lowerBusca))

        setListHeroe(filterHeroes);
    }


    if (loading) {
        return (
            <Content>
                <img className="contentLoading" src={spinner} alt="Loading" />
            </Content>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <ContentSearch>
                <input type="search" placeholder="Procure o seu Héroi" onChange={handleChange} />
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
                                    <button type="button" ><img src={iconstar} className="btStar" /></button>
                                </section>

                            </div>
                        </Link>

                    )
                })}

            </ContentList>
        </ThemeProvider>
    )
}

export default Home;