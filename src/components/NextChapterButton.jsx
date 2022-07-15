import React from "react";
import { useNavigate } from "react-router-dom";

function NextChapterButton(props) {
    const navigate = useNavigate();
    function nextChapter () {
        navigate(`/chapters/${props.chapterId}`)
    }
    return (
        <button onClick={nextChapter}>
            Next Chapter
        </button>
    )
}

export default NextChapterButton;