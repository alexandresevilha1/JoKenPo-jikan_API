import React from 'react'

export const ListaAnime = ({animelist}) => {
  return (
    <>
        {
            animelist ? (animelist.map((anime, index)=>{
                return (
                    <div className='card'>
                    <img src={anime.images.jpg.large_image_url} alt='imagemAnime' />
                        <div className='anime-info'>
                            <h4>{anime.title}</h4>
                            <div className='overlay'>
                                <h4>{anime.title_japanese}</h4>
                                <div className='sinopse'>
                                    <p>{anime.synopsis}</p>
                                </div>
                            </div>
                        </div>
                </div>
                    )
                })
            )  : "Sem animes"
        }
        
    </>
  )
}
