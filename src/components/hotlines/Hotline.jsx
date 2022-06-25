import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getHotline } from './hotlines';

const Hotline = ({ hotlines }) => {
    const { hotlineId } = useParams();
    const hotline = getHotline(hotlineId);

    return (
        <div>

            <h2 className="topic-heading">{hotline.help}</h2>
            <div className="hotline-list">
                <h3>{hotline.contacts.group}</h3>
                {hotline.notes.map((paragraph, id) => {
                    return(
                        <div>
                            <span>{paragraph}</span>
                        </div>
                    )
                })}
                <ul>
                    {hotline.contacts.map((contact, id) => {
                        return (
                            <div className="hotline-list" key={id}>
                                <span><strong>{contact.group}</strong></span>
                                <span>{contact.about_group}</span>
                                <span>{contact.call}</span>
                                <span>{contact.text}</span>
                                <span>{contact.tty}</span>
                                <span>{contact.visit}</span>
                                <hr />
                            </div>)
                    })}
                </ul>


                <Link to={-1}>Back to Hotlines</Link>

            </div>
            <Outlet />

        </div>
    )
}

export default Hotline;