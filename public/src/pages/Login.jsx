import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Please enter the password.", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Username required", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => [handleSubmit(event)]}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>ThatsApp</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <span>
            Don't have an account yet? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #fffbf5;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #006400;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f7efe5;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 0.8rem;
      border: 0.1rem solid #c3acd0;
      border-radius: 0.4rem;
      color: #000000;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #674188;
        outline: none;
      }
    }
    button {
      background-color: #c3acd0;
      color: #000000;
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.4rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #674188;
      }
    }
    span {
      color: #000000;
      text-transform: none;
      a {
        color: #c3acd0;
        font-weight: bold;
      }
    }
  }
`;

export default Login;
