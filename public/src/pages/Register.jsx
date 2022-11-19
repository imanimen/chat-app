import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./../assets/castalk.svg"

function Register() {
    const handleSubmit = (event)=> {
        event.pereventDefault();
        alert("form")
    }

    const handleChange = (event) => {}
    return (
    <>
        <FormContainer>
            <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="Logo" />
                    <h1>Castalk Chat</h1>
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
                    <Link to="/login">Already have an account?</Link>
                </span>
            </form>
        </FormContainer>
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
            text-transform: uppercase
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
            text-transform: uppercase;
            a {
                color: #FFB800;
                text-transform: none;
                font-weight: bold;
            }
        }
    }
`;

export default Register;