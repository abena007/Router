import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { Link,} from 'react-router-dom';
const NavBar = (props) => {
    const [rating, setRating] = useState(0)

    
    
    const handleRating = (rate) => {
        setRating(rate)
    }
    props.handleRate(rating)
return (
    <Navbar  bg="dark" expand="lg">
      <Container fluid>
        <Link style={{textDecoration:'none'}} to='/'>
        <Navbar.Brand style={{fontFamily: 'Oswald' ,fontSize:"50px",color:"red"}}>TUNFLIX
        </Navbar.Brand> 
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            
          </Nav>
          <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>props.handleFilter(e.target.value)}
        />


        <Rating onClick={handleRating} initialValue={rating}/>


        

        </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>


)
}

export default NavBar



