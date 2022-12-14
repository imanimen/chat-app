import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Await, Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/castalk.svg"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from "../utils/ApiRoutes";

function Register() {
    const navigate = useNavigate();
    const [ values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const toastOptions = {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
                const { password, username, email } = values;

            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password,
              });
            if (data.status === false) {
                toast.error(data.msg, toastOptions)
            }
            if (data.status === true) {
                localStorage.setItem('castalk-chat-user', JSON.stringify(data.user))
                navigate("/")
            }
        }
    }

    const handleValidation = () => {
        const {password, confirmPassword, username, email} = values;
        if (username.length < 3){
            toast.error("Username should be greater than 3 characters!",toastOptions);
            return false;
        }
        else if (email === ""){
            toast.error("Email is required!", toastOptions);
            return false
        } else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters",toastOptions);
            return false;
        } else if (password !== confirmPassword) {
            toast.error("Passwords do not match!",toastOptions);
            return false;
        } 
        return true;
    }

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    return (
    <>
        <FormContainer>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                    <h1>castalk chat</h1>
                </div>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={(e) => handleChange(e)} 
                /> 
                <input 
                    type="password" 
                    placeholder="Confirmd Password" 
                    name="confirmPassword" 
                    onChange={(e) => handleChange(e)} 
                />

                <button type="submit">Register</button>
                <span>
                    Already have an account? 
                    <Link to="/login"> Login</Link>
                </span>
            </form>
        </FormContainer>
        <ToastContainer>

        </ToastContainer>
    </>
    )
}

const FormContainer = styled.div`
    height: 100vh;
    width:  100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #303030;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: wight;
            text-transform: uppercase;
            justify-content: center;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #323232;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transaprent;
            padding: 1rem;
            border: 0.1rem solid #FFB800;
            border-radius: 0.4rem;
            color: wight;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #FFB800;
                outline: none;
            }
        }
        button {
            background-color: #FFB800;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out;
            &:hover {
                background-color: #FFFFFF;
                color: #FFB800;
            }
        }
        span {
            color: white;
            a {
                text-decoration: none;
                color: #FFB800;
                text-transform: none;
                font-weight: bold;
            }
        }
    }
`;

export default Register;