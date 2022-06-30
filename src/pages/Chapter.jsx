import React from "react";
import { useParams, Link } from "react-router-dom";

import PageSummary from "../components/PageSummary";
import chapters from "./chapters";
import Menu from "../components/Menu";


function Chapter() {
    const { chapterId } = useParams();
    const chapter = chapters.find(chapter => chapter.id === parseInt(chapterId));
    return (
        <div>
            <Menu />
            <div>
                <p>
                    <Link to="/">
                        Back to Chapters
                    </Link>
                </p>
                <h1>{chapter.title}</h1>
                <p>{chapter.description}</p>
                <Link to={`/chapters/${chapterId}/pages/${chapter.pages[0].id}`}>
                    Start Chapter
                </Link>
            </div>
            <div>
                {chapter.pages.map((page, index) => (
                    <PageSummary chapterId={chapterId} page={page} num={index + 1} key={page.id}/>
                ))}
            </div>

        </div>
    )
};

export default Chapter;