import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Hotlines from "./components/hotlines/Hotlines";
import Hotline from './components/hotlines/Hotline';
import hotlines from './components/hotlines/hotlines';
import Websites from "./components/websites/Websites";
import Website from './components/websites/Website';
import websites from './components/websites/websites';

import Chapter from "./pages/Chapter";

import Chapters from "./components/Chapters";
import Page from "./pages/Page";

import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/SignUp.page";
import { UserProvider } from "./contexts/user.context";

import NotFound from "./components/NotFound";

function App() {

    return (
        <div className="App">
                <UserProvider>
                    <Menu />
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route element={<PrivateRoute />} >
                            <Route path="/" element={<Chapters />} />
                            <Route path="/chapters/:chapterId" element={<Chapter />} />
                            <Route path="/chapters/:chapterId/pages/:pageId" element={<Page />} />
                        </Route>


                        <Route path="/hotlines" element={<Hotlines hotlines={hotlines} />}>
                            <Route path=':hotlineId' element={<Hotline />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>

                        <Route path="/websites" element={< Websites websites={websites} />} >
                            <Route path=":websiteId" element={<Website />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </UserProvider>
        </div>
    );
}

export default App;