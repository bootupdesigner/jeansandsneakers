import React from "react";
import chapters from "../pages/chapters";
import ChapterSummary from "./ChapterSummary";
import Menu from "./Menu";

function Chapters() {
    return (
        <div>
            <Menu />
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