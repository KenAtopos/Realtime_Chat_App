import React from "react";
import styled from "styled-components";
import Hello from "../assets/hi.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Hello} alt="hello" />
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
  color: #183a1d;
  img {
    height: 20rem;
    margin-bottom: 2rem;
  }
  h1 {
  }
  span {
    color: #539165;
  }
  h3 {
    margin: 1rem;
  }
`;
