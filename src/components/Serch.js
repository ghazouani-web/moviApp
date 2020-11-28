import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 import { Dropdown, Navbar,Nav, FormControl,Button,Form} from "react-bootstrap";
 import StarRatingComponent from 'react-star-rating-component';


 const Serch=({onTextChange}) => {
    
        return (
            <div     >

               
<Navbar bg="bleu" variant="bleu"   >
    <Navbar.Brand href="#home"   className="moviapp" >MOVIE APP</Navbar.Brand>
    <Nav className="mr-auto"  > 

    </Nav>
    <Form inline>
      <FormControl   onChange={(e)=>onTextChange(e.target.value)} type="text" placeholder="Search a movie" className="mr-sm-2" />
   
    </Form>

  </Navbar>
  <br />
            
                
            </div>
        )
    
}

export default Serch
