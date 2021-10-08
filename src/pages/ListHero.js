import { useEffect, useState } from 'react';
import { api } from '../services/api';
import spinner from '../assets/images/Spinner.gif';
import { Content } from '../styles/ListHero/style';
import { Header } from '../components/Header';

export function ListHero() {

    const [listHeroe, setListHeroe] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('all.json')
            .then((response) => {
                setListHeroe(response.data)
                setLoading(false)
            }).catch(() => {
            })
    }, [])

    if (loading) {
        return (
            <Content>
                <img className="contentLoading" src={spinner} alt="Loading" />
            </Content>
        )
    }

    return (
        <>
            <Header />
            <div>
                {listHeroe.map((heroe, key) => {
                    return (
                        <div key={key}>
                            <img src={heroe.images.sm} alt="avatar heroi" />
                            <h2>{heroe.name}</h2>
                            <strong>Raça:</strong> <p>{heroe.appearance.race}</p>
                            <strong>Nome:</strong> <p>{heroe.biography.fullName}</p>
                            <strong>Editora:</strong> <p>{heroe.biography.publisher}</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}