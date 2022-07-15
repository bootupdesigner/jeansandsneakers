import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

function CompleteAndContinueButton(props) {
    const navigate = useNavigate();
    function completeAndContinue() {
        navigate(`/chapters/${props.chapterId}/pages/${props.pageId}`)
    }
    return (
        <Button size="md" className="w-100 my-1" variant="success" onClick={completeAndContinue}>
            Next Page
        </Button>
    )
}

export default CompleteAndContinueButton;