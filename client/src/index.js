import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import UserProvider from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const { REACT_APP_DOMAIN,REACT_APP_CLIENT_ID } = process.env;

root.render(
  <Auth0Provider
    domain={REACT_APP_DOMAIN}
    clientId={REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>  
    </BrowserRouter>
  </Auth0Provider>
);
