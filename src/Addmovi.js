
import React, { useState } from 'react';
import { Modal, Button,InputGroup ,FormControl} from "react-bootstrap";






   function Addmovi({addMovi} ) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    const[Titel,setTitel]=useState()
    const[description,setDescription]=useState()
    const[posterUrl,setPosterUrl]=useState()
    const[rate,setRate]=useState() 

    const[newMovie,setNewMovie]=useState({
      titel:"",
      description:"",
      posterUrl:"",
      rate:0,
    })


    const onChangeHandler = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const handleClick = (e) => {
    addMovi(newMovie);
  };   


     
         



    

    return (
        <div  >
            
        
            <Button variant="primary"    style={{ padding:"1% " , marginLeft: "40em" , marginTop:"3%" }}   onClick={handleShow}>
Add Movie      </Button>

      <Modal show={show} onHide={handleClose}>
      <div>
  <InputGroup className="mb-3">
    
    <FormControl
      placeholder="Enter a movie"
      name='Titel'
      aria-label="moviname"
      aria-describedby="basic-addon1" 
      onChange={onChangeHandler}
      />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="description"
      name='description'

      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={onChangeHandler}

    />
    
  </InputGroup>

  <InputGroup className="mb-3">
    
    <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="posterUrl"  name='posterUrl'    onChange={onChangeHandler}
  />
  </InputGroup>
  <InputGroup className="mb-3">
    
    <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="rate"   name='rate'  onChange={onChangeHandler}
  />
  </InputGroup>

  

</div>

        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClick  }>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>





        </div>
    )
}

export default Addmovi
