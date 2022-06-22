import React from "react";

import Menu from "../Menu";
import hotlines from "./hotlines";

const Hotlines = () => {
    return (
        <div>
            <Menu />
            {hotlines.map((hotline, id) => {
                return (
                    <div key={id}>
                        <h3>{hotline.help}</h3>
                        <p>{hotline.notes}</p>
                        {hotline.contacts.map((contact) => {
                            return (
                                <div className="hotline-list" key={id}>
                                    <span><strong>{contact.group}</strong></span>
                                    <span>{contact.call}</span>
                                    <span>{contact.text}</span>
                                    <span>{contact.tty}</span>
                                    <span>{contact.visit}</span>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                );
            })}
        </div>

    )
}

export default Hotlines;