import React from 'react'

const TopAnime = ({ title, score, url, year }) => {
  return (
    <div className='top-ten-animes'>
      <h3 className='top-ten-title'>{title}</h3>
      <div className='score-year'>
      <h4 className='top-ten-score'>Score: {score}</h4>
      <p className='top-ten-year'>Year: {year}</p>
      </div>
      <form className='top-ten-form' action={url}>
        <input type="submit" value="Go to Anime" />
      </form>
    </div>
  )
}

export default TopAnime