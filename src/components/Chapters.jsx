import React from "react";
import chapters from "../pages/chapters";
import ChapterSummary from "./ChapterSummary";

function Chapters() {
    return (
        <div>
            <h1>Chapters</h1>
            <div>
                {chapters.map((chapter) => (
                    <ChapterSummary chapter={chapter} key={chapter.id} />
                ))}
            </div>
        </div>
    )
}

export default Chapters;