import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Introduction from "./components/Introduction";

import SelfWorth from "./components/SelfWorth";
import Positude from "./components/Positude";
import Etiquette from "./components/Etiquette";
import Hygiene from "./components/Hygiene";
import Nutrition from "./components/Nutrition";
import YourBody from "./components/YourBody";
import Dating from "./components/Dating";
import Safety from "./components/Safety";
import Closing from "./components/Closing";
import Hotlines from "./components/hotlines/Hotlines";
import Hotline from './components/hotlines/Hotline';
import Websites from "./components/Websites";
import Home from "./components/Home";
import hotlines from './components/hotlines/hotlines';
import NotFound from "./components/NotFound";

function App() {

    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/home" element={< Introduction />} />
                    <Route path="/self-worth" element={< SelfWorth />} />
                    <Route path="/positude" element={< Positude />} />
                    <Route path="/etiquette" element={< Etiquette />} />
                    <Route path="/health-and-hygiene" element={< Hygiene />} />
                    <Route path="/physical-activity-and-nutrition" element={< Nutrition />} />
                    <Route path="/your-body" element={< YourBody />} />
                    <Route path="/dating-and-sex" element={< Dating />} />
                    <Route path="/safety" element={< Safety />} />
                    <Route path="/closing" element={< Closing />} />

                    <Route path="/hotlines" element={<Hotlines hotlines={hotlines} />}>
                        <Route path=':hotlineId' element={<Hotline />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    <Route path="/websites" element={< Websites />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;