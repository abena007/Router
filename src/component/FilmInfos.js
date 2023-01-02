import React from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
const FilmInfos = ({elm}) => {
  const params = useParams()
  const movie = elm.find(el => el.id == params.id)

  return (
    <div className='filmDescription'>
      <div style={{display:'flex' , gap:'10px'}}>
        <img src={movie.posterURL} width={'55px'}/>
        <div >
        <h2>{movie.title}</h2>
        <Rating initialValue={movie.rating} readonly={true} size ='20px'/>
        </div >
        <div>{movie.description}</div>
        </div>  
        <div style={ {backgroundColor: '#282c34',minHeight:'45vh',minWidth:'75vh' ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px'}}>
        <iframe width="640" height="360" src={movie.trailerURL} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      

    </div>
  )
}   

export default FilmInfos  