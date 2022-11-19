import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login"
import Chat from "./pages/Chat"


export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" exact elements={<Register></Register>}></Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Chat />} />

      </Routes>
    </BrowserRouter>
  );
}
