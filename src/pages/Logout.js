import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);
  
  return <h2>Logging out...</h2>;
};

export default Logout;