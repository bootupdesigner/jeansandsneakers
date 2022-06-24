import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Menu />
            <h1>404: Page not found,
                <Link to="/home">
                please return home.
                </Link>
            </h1>
        </div>
    )
}

export default NotFound;