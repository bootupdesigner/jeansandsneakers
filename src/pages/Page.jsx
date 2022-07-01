import React from "react";
import { useParams, Link } from "react-router-dom";

import chapters from "./chapters";
import CompleteAndContinueButton from "../components/CompleteAndContinueButton";
import Menu from "../components/Menu";

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
            <Menu />
            <div>
                <p>
                    <Link to={'/chapters/' + chapter.id}>
                        Back to {chapter.title}
                    </Link>
                </p>
                <h1>{page.title}</h1>
            </div>
            <div>
                {page.summary.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
                ))}
                <p className="text-center"><strong>{page.intro_quote}</strong></p>
                <p className="text-center"><strong>{page.signed}</strong></p>
                <p>
                    {page.story}
                </p>
                <CompleteAndContinueButton chapterId={chapterId} pageId={nextPageId()} />
            </div>
        </div>
    )
}

export default Page;