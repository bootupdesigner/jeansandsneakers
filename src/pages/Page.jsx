import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import chapters from "./chapters";
import CompleteAndContinueButton from "../components/CompleteAndContinueButton";


function Page() {
    const { chapterId, pageId } = useParams();

    const chapter = chapters.find(chapter => chapter.id === parseInt(chapterId));

    const page = chapter.pages.find(page => page.id === parseInt(pageId));

    const nextPageId = () => {
        const currentIndex = chapter.pages.indexOf(page)
        const nextIndex = (currentIndex + 1) % chapter.pages.length
        return chapter.pages[nextIndex].id
    }

    return (
        <div>
            <div>
                <p>
                    <Link to={'/chapters/' + chapter.id}>
                        Back to {chapter.title}
                    </Link>
                </p>
                <h1>{page.title}</h1>
            </div>

            {/* Introduction Chapter */}
            <Container className="intro_image">
                <img src={page.intro_image} alt={page.intro_alt} />
            </Container>

            {/* self-worth chapter */}

            <div>
                {page.story.map((paragraph, key) => (
                    <p>
                        <p key={key}>{paragraph}</p>
                    </p>
                ))}

                {page.topic.map((topic) => (
                    <div>
                        <u><h3>{topic.heading}</h3></u>
                        <p><strong>{topic.sub_heading_1}</strong></p>
                        {topic.narrative_1.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}

                        <p><strong>{topic.sub_heading_2}</strong></p>
                        {topic.narrative_2.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}

                        <p><strong>{topic.sub_heading_3}</strong></p>
                        {topic.narrative_3.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}

                        <p><strong>{topic.sub_heading_4}</strong></p>
                        {topic.narrative_4.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}

                        <p><strong>{topic.sub_heading_5}</strong></p>
                        {topic.narrative_5.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}

                        <p><strong>{topic.sub_heading_6}</strong></p>
                        {topic.narrative_6.map((paragraph, key) =>
                        (
                            <p>{paragraph}</p>
                        ))}
                    </div>

                ))}
                <CompleteAndContinueButton chapterId={chapterId} pageId={nextPageId()} />
                <Link to={-1}>
                    <Button className="w-100 my-1" size="md" variant="primary">Last Page</Button>
                </Link>
            </div>
        </div>
    )
}

export default Page;