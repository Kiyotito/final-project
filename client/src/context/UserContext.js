import React, { useState } from "react";

export const UserContext = React.createContext();

const initialState = {};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const createUserAndRecieveInfo = async (newUser) => {
    //POST fetch call here.
    /* const  body = {
                email : user.email,
                name : user.name,
                picture: user.picture,
                id : user.sub
        } */

    // 1. If the user already exists, send back the user project from the database.
    // 2. If the user does not exist, create a new user and send back the user object from the database.

    const response = await fetch(`/get-profile/${newUser.sub}`,{
        method: 'POST',
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email : newUser.email,
          name : newUser.name,
        }),
    })
    
    const data = await response.json()

    setUser({
      email: newUser.email,
      name: newUser.name,
      id : newUser.sub
    });
  };


  return (
    <UserContext.Provider
      value={{
        user,
        createUserAndRecieveInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
