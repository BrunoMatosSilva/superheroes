import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function Home() {

    const [listHeroe, setListHeroe] = useState([])

    useEffect(() => {
        api.get('all.json')
            .then((response) => {
                setListHeroe(response.data)
            }).catch(() => {
                console.log("Api Incorreta")
            })
    }, [])

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