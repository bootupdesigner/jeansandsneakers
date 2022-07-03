import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function ChapterSummary(props) {
    return (
        <div key={props.chapter.id}>
            <Card.Title className="text-center">
                <Link to={'/chapters/' + props.chapter.id}>
                {props.chapter.title}
                </Link>
            </Card.Title>
            <Card.Text>
                <Link to={'/chapters/' + props.chapter.id}>
                    {props.chapter.description.substring(0, 80)} ...
                </Link>
            </Card.Text>
        </div>
    )
}

export default ChapterSummary;