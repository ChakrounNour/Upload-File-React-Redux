import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { BrowserUtils } from "@azure/msal-browser";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import AtomButton from "../atoms/button/AtomButton";
import { MdOutlineLogout } from "react-icons/md";

function Logout() {
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
    dispatch(logout());
  };
  return (
    <>
      <AtomButton
        onClick={handleLogout}
        className="hover:shadow rounded p-2 hover:bg-blue-500 flex items-center"
        ariaLabel="Logout"
      >
        <MdOutlineLogout />
        LogOut
        <span className="sr-only">LogOut</span>
      </AtomButton>
    </>
  );
}

export default Logout;
