import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';
import '../App.css'




const LogoutButton = () => {
  const { logout, isAuthenticated, user} = useAuth0();

  return (isAuthenticated && (
      <div className="app1">
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand>
      <img src="logo192.png" alt="logo" />{' '}
      Brand
    </Navbar.Brand>
    
     <> 
        <div> <h4>{user.name}</h4> </div>
        <Button variant="outline-primary" onClick={() => logout()}> Log Out </Button>
      
      </>   
     
    
    </Navbar></div>
  )
  )
}

export default LogoutButton