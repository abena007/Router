import React, { useState } from 'react'
import FilmInfos from '../component/FilmInfos'
import NavBar from '../component/Navbar'
const FilmPage = ({elm}) => {

  const [filter, setFilter] = useState('')  
  const [rate, setRate]=useState(0)
  const handleFilter= (val) => {setFilter(val)}
  const handleRate = (val) => {
setRate(val)}
  return (
   <div>
        <NavBar handleFilter={handleFilter} handleRate={handleRate}/>   
        <FilmInfos elm={elm}/>
        
    </div>
      
    
    
  )
}

export default FilmPage