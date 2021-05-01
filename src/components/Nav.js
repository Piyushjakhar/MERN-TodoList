import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar>
  <Navbar.Brand href="#home">TodoList</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  
  <Button variant="light" href="/auth/google">Sign in</Button>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
