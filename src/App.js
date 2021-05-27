import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/Home';
import Four from './components/Four';





function App() {
    return (
        <div className="App">
            <Router>
                <Home path="/home" />
                <Four path="/:id" />
                <Four path="/:id/:color1/:color2" />
            </Router>
        </div>
    );
}
export default App;


