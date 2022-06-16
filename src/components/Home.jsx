import React from "react";
import Logo from "../components/sneakers-logo-512.png";
import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <div className="home-content">
            <h1>From Jeans and Sneakers</h1>
            <span>The Teen Girls' Guide To Getting Around</span>
            <img src={Logo} />
            <Button type="button" variant="success" size="lg">Enter<br />From Jeans and Sneakers</Button>
        </div>
    )
};

export default Home;