import React from "react";
import { Link } from "react-router-dom";

function ChapterSummary(props) {
    return (
        <div key={props.chapter.id}>
            <div>
                <div>
                    <h2>
                        <Link to={'/chapters/' + props.chapter.id}>
                          Chapter {props.chapter.id}: {props.chapter.title}
                        </Link>
                    </h2>
                </div>
                <p>
                    <Link to={'/chapters/' + props.chapter.id}>
                        {props.chapter.description}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ChapterSummary;