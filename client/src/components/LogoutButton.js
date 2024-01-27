import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";


const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user: UserFromAuth0} = useAuth0();
  const {createUserAndRecieveInfo,user } = useContext(UserContext);

 
  useEffect(() => {
    if (UserFromAuth0) {
      createUserAndRecieveInfo(UserFromAuth0);
    }
  }, [UserFromAuth0]);
  
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;