import React from "react";
import { PATH_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate(`/${PATH_URL.signIn}`);
  }

  return (
    <div>
      <h1>Header</h1>
      <button onClick={handleLogout}>Logout</button>
  </div>
  );
};

export default Header;