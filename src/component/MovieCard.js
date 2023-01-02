import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
const MovieCard = ({elm}) => {
  const link = `/${elm.title}/${elm.id}`
  return (<div className='MovieCard' >
    <h2  style={{textAlign:"center",color:"white"}}>
      {elm.title}
    </h2>
    <img src={elm.posterURL} height='350px' width='250px' alt='poster'></img>
    <Rating initialValue={elm.rating} readonly={true}/>
    <br />
    <p style={{fontSize:'16px'}}>{elm.description}</p>
    <Link to={link}>
    <Button variant='outline-light' >Watch trailer</Button>
    </Link>
  </div>
    
  )
}

export default MovieCard