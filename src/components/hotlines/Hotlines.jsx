import React from "react";
import Menu from "../Menu";
import hotlineContent from "./hotlines";

const Hotlines = () => {
    const hotlines = hotlineContent;
    return(
        <div>
            <Menu />
            {hotlines.map((hotline, index) => {
                return(
                    <div key={index}>
                        <h3>{hotline.help}</h3>
                        <p>{hotline.notes}</p>
                        {hotline.contacts.map((contact) => {
                            return(
                                <div className="hotline-list" key={index}>
                                    <span><strong>{contact.group}</strong></span>
                                    <span>Call: {contact.call}</span>
                                    <span>Text: {contact.text}</span>
                                    <span>TTY: {contact.tty}</span>
                                    <span>Visit: {contact.visit}</span>
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