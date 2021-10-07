import { useEffect, useState } from 'react';
import { api } from '../services/api';
import spinner from '../assets/images/Spinner.gif';

export function Home() {

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
            <div>
                <img src={spinner} alt="Loading..." />
            </div>
        )
    }

    return (
        <div>
            {listHeroe.map((heroe, key) => {
                return (
                    <div key={key}>
                        <img src={heroe.images.sm} />
                        <h2>{heroe.name}</h2>
                        <strong>Raça:</strong> <p>{heroe.appearance.race}</p>
                        <strong>Nome:</strong> <p>{heroe.biography.fullName}</p>
                        <strong>Editora:</strong> <p>{heroe.biography.publisher}</p>
                    </div>
                )
            })}

        </div>
    )
}