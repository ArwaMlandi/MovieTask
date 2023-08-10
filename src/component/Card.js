import React from 'react'
import './Card.css'
import poster from './../images/background.jpg'
const Card = (movie) => {
  console.log(movie.info)
  let img_path="https://image.tmdb.org/t/p/w500"
  return (
    <>
    <div className='movie'>
        <img src={img_path+movie.info.poster_path} className='poster' />
        <div className='movie-detailes'>
          <div className='box'>
            <h4 className='title'>{movie.info.title}</h4>
            <p className='rate'>{movie.info.vote_average}</p>
          </div>
          <div className='overview'>
            <h1>{movie.info.overview}</h1>
            
          </div>
        </div>

    </div>
    </>
  )
}

export default Card