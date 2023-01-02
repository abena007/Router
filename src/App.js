import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import FilmPage from './pages/FilmPage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [Movielist,setMovieList]=useState([{
    id:uuidv4(),
    title:"Troll ",
    description:'Deep in the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is rapidly approaching the capital of Norway. A group of people band together to stop him from causing deadly havoc.',
    posterURL:'https://upload.wikimedia.org/wikipedia/en/e/ec/Troll_%282022%29.jpeg',
    rating:1,
    trailerURL:"https://www.youtube.com/embed/AiohkY_XQYQ"
  }, 
  
  {id:uuidv4(),
    title:'Avengers : Endgame',
    description :'The Titan Thanos, having managed to appropriate all six Infinity Stones and reunite them on the Golden Gauntlet, was able to achieve his goal of pulverizing half the population of the Universe. Five years later, Scott Lang, aka Ant-Man, manages to escape from the subatomic dimension where he was stuck. He offers the Avengers a solution to bring back to life all the missing beings, including their allies and teammates: recover the Infinity Stones in the past.',
    posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=480',
    rating:2,
    trailerURL:"https://www.youtube.com/embed/TcMBFSGVi1c"

  },
  { id:uuidv4(),
    title:'Avatar 2',
  description:"Jake Sully and Ney'tiri have formed a family and do everything to stay as close together as possible. However, they are forced to leave their homes and explore the different still mysterious regions of Pandora. When an old threat resurfaces, Jake will have to fight an uphill war against the humans.",
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/12/Avatar-The-Way-of-Water.jpg',
  rating:4,
  trailerURL:"https://www.youtube.com/embed/d9MyW72ELq0"
  },
  {id:uuidv4(),
     title:'Black Adam',
  description:'In ancient Kahndaq, Teth Adam received almighty powers from the gods. After using these powers for revenge, he was imprisoned, becoming Black Adam. Almost 5,000 years have passed and Black Adam has gone from man to myth to legend.',
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/10/Black-Adam.jpg',
  rating:5,
  trailerURL:"https://www.youtube.com/embed/mkomfZHG5q4"

  },
  {id:uuidv4(),
     title:'Black Panther 2',
  description:"Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milajes struggle to protect their nation from interference from other world powers after the death of King T'Challa. As the people struggle to move forward, our heroes will have to unite and rely on the help of mercenary Nakia and Everett Ross to usher the kingdom of Wakanda into a new era. But a terrible threat arises from a kingdom hidden deep in the oceans: Talokan.",
  posterURL:' https://fr.web.img6.acsta.net/c_310_420/pictures/22/10/17/10/28/5232325.jpg',
  rating:3,
  trailerURL:"https://www.youtube.com/embed/_Z3QKkl1WyM" 

  }
])
  return (
    
    <Routes>
      <Route path='/' element={<Home Movieslist={Movielist}/>}></Route>
      <Route path='/:title/:id' element={<FilmPage elm={Movielist} />}></Route>
   
 </Routes>
  )
 /* const [filter, setFilter] = useState('')  
  const [rate, setRate]=useState(0)
  const [Movielist,setMovieList]=useState([{
    title:"Troll ",
    description:'Deep in the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is rapidly approaching the capital of Norway. A group of people band together to stop him from causing deadly havoc.',
    posterURL:'https://upload.wikimedia.org/wikipedia/en/e/ec/Troll_%282022%29.jpeg',
    rating:1,
    trailerURL:''
  }, 
  {title:'Avengers : Endgame',
    description :'The Titan Thanos, having managed to appropriate all six Infinity Stones and reunite them on the Golden Gauntlet, was able to achieve his goal of pulverizing half the population of the Universe. Five years later, Scott Lang, aka Ant-Man, manages to escape from the subatomic dimension where he was stuck. He offers the Avengers a solution to bring back to life all the missing beings, including their allies and teammates: recover the Infinity Stones in the past.',
    posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=480',
    rating:2,
    trailerURL:''

  },
  { title:'Avatar 2',
  description:"Jake Sully and Ney'tiri have formed a family and do everything to stay as close together as possible. However, they are forced to leave their homes and explore the different still mysterious regions of Pandora. When an old threat resurfaces, Jake will have to fight an uphill war against the humans.",
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/12/Avatar-The-Way-of-Water.jpg',
  rating:4,
  trailerURL:''

  },
  { title:'Black Adam',
  description:'In ancient Kahndaq, Teth Adam received almighty powers from the gods. After using these powers for revenge, he was imprisoned, becoming Black Adam. Almost 5,000 years have passed and Black Adam has gone from man to myth to legend.',
  posterURL:'https://iegybest.stream/wp-content/uploads/2022/10/Black-Adam.jpg',
  rating:5,
  trailerURL:''

  },
  { title:'Black Panther 2',
  description:"Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milajes struggle to protect their nation from interference from other world powers after the death of King T'Challa. As the people struggle to move forward, our heroes will have to unite and rely on the help of mercenary Nakia and Everett Ross to usher the kingdom of Wakanda into a new era. But a terrible threat arises from a kingdom hidden deep in the oceans: Talokan.",
  posterURL:' https://fr.web.img6.acsta.net/c_310_420/pictures/22/10/17/10/28/5232325.jpg',
  rating:3,
  trailerURL:''

  }
])

  const handleFilter= (val) => {setFilter(val)}
  const handleRate = (val) => {
    setRate(val)}
    const handleAddFilm = (val) => {
      setMovieList([...Movielist,val])}
  
  return (
    
    <div className="App">
      
      <Filter handleFilter={handleFilter} handleRate={handleRate}/>   
      <AddMovie handleAddFilm={handleAddFilm}/>  
      <div className="App-header">
        <MovieList  list={Movielist.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase()) && elm.rating >=rate)}/> 
      </div>
      
    </div>
  );
}
*/
}
export default App;

