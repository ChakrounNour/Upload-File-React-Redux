import React from "react";
import loginImg from "../../assets/login.png";
import AtomeTitle from "../atoms/title/AtomeTitle";
import AtomButton from "../atoms/button/AtomButton";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

function Login() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-teal-200">
      <div className="bg-white flex shadow-2xl rounded-2xl items-center p-5 xl:mx-44 sm:mx-2 md:space-y-0">
        <div className="w-1/2">
          <img
            src={loginImg}
            alt="login"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="w-1/2">
          <AtomeTitle
            level={1}
            className="xl:text-2xl sm:text-sm text-blue-600 font-bold"
          >
            Se connecter
          </AtomeTitle>
          <AtomeTitle
            level={2}
            className="xl:text-2xl sm:text-sm text-blueGris pb-4 pt-4 font-bold"
          >
            Connectez-vous à votre compte Microsoft
          </AtomeTitle>
          <AtomButton
            className="px-4 py-2"
            variant={"blue-outline-border"}
            onClick={handleLogin}
          >
            Se connecter
          </AtomButton>
        </div>
      </div>
    </div>
  );
}

export default Login;
