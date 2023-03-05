import React from "react";
import styled from "styled-components";
import Star from "../assets/star.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Star} alt="Star" />
      <h1>
        Welcome, <span>{currentUser.username}</span>
      </h1>
      <h3>Start and enjoy your chat!</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #006400;
  img {
    height: 30rem;
    padding: 2rem;
  }
  span {
    color: #674188;
  }
  h3 {
    margin: 1rem;
  }
`;
