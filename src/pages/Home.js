import React from 'react'
import '../App.css';
import {useState} from 'react'
import MovieList from '../component/MovieList.js'
import NavBar  from "../component/Navbar"
import AddMovie from '../component/AddMovie';
const Home = ({Movieslist}) => {

const [filter, setFilter] = useState('')  
const [rate, setRate]=useState(0)
const [Movielist,setMovieList]=useState({Movieslist})

const handleFilter= (val) => {setFilter(val)}
const handleRate = (val) => {
setRate(val)}
const handleAddFilm = (val) => {
    setMovieList([...Movielist,val])}
console.log(Movielist)
return (

<div className="App">
    
    <NavBar handleFilter={handleFilter} handleRate={handleRate}/>   
    
    <AddMovie handleAddFilm={handleAddFilm}/>  
    <div className="App-header">
    <MovieList  list={Movieslist.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase()) && elm.rating >=rate)}/> 
    </div>
    
</div>
)
}

export default Home