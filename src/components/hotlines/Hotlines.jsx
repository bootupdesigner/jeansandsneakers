import React from "react";
import { Link, Outlet } from "react-router-dom";

import Menu from "../Menu";
import {getHotlines} from "./hotlines";

const Hotlines = () => {
    const hotlines = getHotlines();

    return (
        <div>
            <Menu />
            <h1 className="topic-heading">Hotlines</h1>
            <ul>
                {hotlines.map(({help, id}) => (
                    <li key={id}>
                        <Link to={id}>
                            {help}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />

            <Outlet />
        </div>
    )
}

export default Hotlines;