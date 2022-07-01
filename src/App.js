import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Hotlines from "./components/hotlines/Hotlines";
import Hotline from './components/hotlines/Hotline';
import hotlines from './components/hotlines/hotlines';
import Websites from "./components/websites/Websites";
import Website from './components/websites/Website';
import websites from './components/websites/websites';

import Chapter from "./pages/Chapter";
import Chapters from "./components/Chapters";
import Page from "./pages/Page";

import NotFound from "./components/NotFound";

function App() {

    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path="/" element={<Chapters />} />

                    <Route path="/hotlines" element={<Hotlines hotlines={hotlines} />}>
                        <Route path=':hotlineId' element={<Hotline />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route path="/websites" element={< Websites websites={websites} />} >
                        <Route path=":websiteId" element={<Website />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route path="/chapters/:chapterId" element={<Chapter />} />
                    <Route path="/chapters/:chapterId/pages/:pageId" element={<Page />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;