import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Access from "./components/Access/Access";

/**
 * Has all elements of the website and returns it to display.
 * Has Routes element included to manage the website routing system.
 *
 * @returns {JSX.Element} returns all website elements.
 * @constructor
 */
const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Navigate replace to="/movies" />} />
                    <Route path="/access" exact element={<Access/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
