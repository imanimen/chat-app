import React from "react";
import styled from "styled-components";

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
                    <img src="" alt="" />
                    <h1>Snappy</h1>
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
                <span>Already have an account?<link to="/login">Login</link></span>
            </form>
        </FormContainer>
    </>
    )
}

const FormContainer = styled.div``;

export default Register;