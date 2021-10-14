import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import usePersistedTheme from '../utils/usePersistedTheme';

import spinner from '../assets/images/Spinner.gif';
import { Content, ContentList } from '../styles/ListHero/style';
import iconstar from '../assets/images/staricon.png';
import Header from '../components/Header';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const ListHero = () => {

    const [theme, setTheme] = usePersistedTheme('theme', light);
    const [listHeroe, setListHeroe] = useState([])
    const [loading, setLoading] = useState(true);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
                const data = await response.json();
                setListHeroe(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        };
        fetchHeroes();
    }, [])

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
            <ContentList>
                {listHeroe.map((heroe, key) => {
                    return (
                        <div className="listBody" key={key}>

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
                    )
                })}

            </ContentList>
        </ThemeProvider>
    )
}

export default ListHero;