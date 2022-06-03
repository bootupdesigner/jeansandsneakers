import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route exact path="/" element={ <Introduction />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
