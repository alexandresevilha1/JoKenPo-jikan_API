import { useEffect, useState } from 'react';
import { ListaAnime } from './listaAnime';
import './catalogo.css'

export default function Catalogo() {

    const [search, setSearch] = useState('');
    const [animeData, setAnimeData] = useState();

    const getData=async()=>{
        const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=18`)
          const resData = await res.json();
            setAnimeData(resData.data)
    }

    useEffect (()=>{
        getData()
      },[search])

    return (
        <>
            <div className='header-filter'>
                <h1>Nosso catalogo</h1>
                <div className='filter'>
                    <input 
                    type='search' 
                    placeholder='Filtre por nome'
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className='container'>
                    <div className='animeInfo'>

                    </div>
                    <div className='anime-row'>
                        <div className='row'>
                            <ListaAnime 
                            animelist={animeData}
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}