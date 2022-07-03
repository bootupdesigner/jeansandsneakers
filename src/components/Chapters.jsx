import React from "react";
import { Card } from "react-bootstrap";
import chapters from "../pages/chapters";
import ChapterSummary from "./ChapterSummary";
import Menu from "./Menu";
import SneakersLogo from "./sneakers-logo-512.png";

function Chapters() {
    return (
        <div>
            <Menu />
            <h1>Chapters</h1>
            <div>
                <div>
                    {chapters.map((chapter) => (
                        <Card className="chapter-card">
                            <div className="card-image">
                                <Card.Img src={SneakersLogo} alt="from Sneakers and Jeans Logo" />
                            </div>
                            <div className="card-text">
                                <ChapterSummary chapter={chapter} key={chapter.id} />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chapters;