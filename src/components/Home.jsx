import React from "react";
import Logo from "../components/sneakers-logo-512.png";
import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <div className="home-content">
            <h1>From Sneakers & Jeans</h1>
            <span>The Teen Girls' Guide To Getting Around</span>
            <img src={Logo} alt="From Sneakers and Jeans Logo" />
            <Button type="button" variant="success" size="lg" href="/home">Enter<br />From Jeans and Sneakers</Button>
        </div>
    )
};

export default Home;