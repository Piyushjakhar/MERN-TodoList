import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>

       
      <div className="col-sm-12 homepage">

      <h1 className="cursiveFont my-3">A task manager you can trust for life</h1>
      
      <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list </p>
        
      <Button variant="success" href="/auth/google">Let's get started</Button>
      </div>
      

      
      </>
    );
  }
}