import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TopAnime from './TopAnime';

const Sidebar = () => {

  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/top/anime`)
      .then(res => {
        const animes = res.data.data.slice(0, 5);
        setTopAnime(animes)
      })
  }, [])

  // console.log(topAnime)

  return (
    <div className='sidebar-wrapper'>
      <h3 className='sidebar-name'>Top {topAnime.length} Animes</h3>
      <div>
        {topAnime.map(anime => (
          <TopAnime 
            title={anime.title_english}
            score={anime.score}
            url={anime.url}
            year={anime.year}
            key={anime.mal_id}  
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar