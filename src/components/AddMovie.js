import React from 'react'
import {Form , Button,Col} from "react-bootstrap";


export default function AddMovie() {
    return (
        <div   className="add" >


             <h1 style={{textAlign: "center"}}> ADD A MOVIE  </h1>
  


<Form     >
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Titel</Form.Label>
      <Form.Control  placeholder="Enter a movie" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>poster</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>rate</Form.Label>
      <Form.Control   />
    </Form.Group>

  </Form.Row>
  <Button variant="primary" type="submit"  >
    AddMovie
  </Button>
</Form>
            
        </div>
    )
}
