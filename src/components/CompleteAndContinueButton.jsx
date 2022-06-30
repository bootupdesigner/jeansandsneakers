import React from "react";
import { useNavigate } from "react-router-dom";

function CompleteAndContinueButton(props) {
    const navigate = useNavigate();
    function completeAndContinue () {
        navigate(`/chapters/${props.chapterId}/pages/${props.pageId}`)
    }
    return (
        <button onClick={completeAndContinue}>
            Complete and Continue
        </button>
    )
}

export default CompleteAndContinueButton;