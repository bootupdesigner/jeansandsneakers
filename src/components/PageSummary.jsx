import React from "react";
import { Link } from "react-router-dom";

function PageSummary(props) {
    return (
        <div key={props.page.id}>
            <div>
                <div>
                    <h2>
                        <Link to={'/chapters/' + props.chapterId + '/pages/' + props.page.id}>
                            {props.num}. {props.page.title}
                        </Link>
                    </h2>
                </div>
                <p>
                    <Link to={'/chapters/' + props.chapterId + '/pages/' + props.page.id}>
                        {props.page.description}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default PageSummary;