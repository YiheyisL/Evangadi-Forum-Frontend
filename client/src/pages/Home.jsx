import React, {
  useContext,
  useEffect,
  // , useState
} from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../App";
import "./home.css"

const Home = () => {
  const { user } = useContext(AppState);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.username) navigate("/login");
  }, [user.username, navigate]);
  return (
    <div className="main_wrapper">
      <h1>WelCome</h1>
      <br />
      <br />
      <br />
      <h2>{user.username}</h2>
    </div>
  );
};

export default Home;
