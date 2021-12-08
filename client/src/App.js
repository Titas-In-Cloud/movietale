import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Access from "./components/Access/Access";

/**
 * Has all elements of the website and returns it for display.
 * Has Routes element included to manage the website routing system.
 *
 * @returns {JSX.Element} returns all website elements and routes.
 * @constructor
 */
const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Navigate replace to="/movies" />} />
                    <Route path="/movies" exact element={<Home/>} />
                    <Route path="/movies/search" exact element={<Home/>} />
                    <Route path="/access" exact element={(!user ? <Access/> : <Navigate replace to="/movies" />)} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
