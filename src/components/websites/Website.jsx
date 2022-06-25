import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getWebsite } from './websites';

const Website = ({ websites }) => {
    const { websiteId } = useParams();
    const website = getWebsite(websiteId);

    return (
        <div>
            <h2 className="topic-heading">{website.support}</h2>
            {website.website.map((paragraph, id) => {
                    return(
                        <ul>
                            <li>{paragraph}</li>
                        </ul>
                    )
                })}
                <Outlet />
        </div>
    )
};

export default Website;