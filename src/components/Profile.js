import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import DisplayAllPosts from './DisplayAllPosts';

const Profile = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
    <>
      <DisplayAllPosts />
    </>    
    
    
    )
    
  )
}

export default Profile
