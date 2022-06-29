import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {

  const [anime, setAnime] = useState([])

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime?q=naruto&sfw`)
      .then(res => {
        const anime = res.data.data.slice(0, 10);
        setAnime(anime);
      })
  }, [])  

  return (
    <div className='view-wrapper'>
      {}
    </div>
  )
}

export default View