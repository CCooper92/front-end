import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HomePage = () => {
  const handleSubmit = () => {
    window.location.href = "/login";
  };
  return (
    <HomeHeader>
      <HomeDiv>
        <h1>Potluck Planner</h1>
        <p>Welcome to the Potluck Finder Application!</p>
        <button onClick={handleSubmit}>Log in!</button>
        <p>
          Dont have an account with us yet?{" "}
          <Link to="/sign-up">Sign Up Here</Link>{" "}
        </p>
      </HomeDiv>
    </HomeHeader>
  );
};

const HomeHeader = styled.header`
  background: #f5f0e1;
  color: #663399;
  width: 100%;
  height: 130vh;
  font-size: 1.4rem;
  border: 2px purple solid;
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    font-size: 1.2rem;
    font-weight: bold;
    width: 8%;
    text-decoration: none;
  }

  h1 {
    text-decoration: underline;
  }

  p {
    text-decoration: none;
  }
`;

export default HomePage;
