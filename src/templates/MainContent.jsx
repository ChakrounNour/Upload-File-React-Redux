import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import React from "react";
import Login from "../components/pages/Login";
import Template from "./layout/Template";
import RoutesExp from "../routes/RoutesExp";

function MainContent() {
  return (
    <>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Template>
          <div className="container justify-center">
            <RoutesExp />
          </div>
        </Template>
      </AuthenticatedTemplate>
    </>
  );
}

export default MainContent;
