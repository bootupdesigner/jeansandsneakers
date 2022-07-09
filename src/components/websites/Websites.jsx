import React from "react";
import { Link, Outlet } from "react-router-dom";

import { getWebsites } from "./websites";

const Websites = () => {
    const websites = getWebsites();

    return (
        <div>
            <h1 className="topic-heading">Websites</h1>
            <ul>
                {websites.map(({support, id}) => (
                    <li key={id}>
                        <Link to={id}>
                            {support}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />

            <Outlet />
        </div>
    )
}


export default Websites;