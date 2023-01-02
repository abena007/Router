import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
return (
    <div className='MovieList'>
        {list.length? list.map(elm => <MovieCard elm={elm}/>) : <h2>Movie not found </h2>}
    </div>)
}

export default MovieList