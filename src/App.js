import React from 'react';
import './App.css';
import './style.css';
import Routes from './routes';
import Menu from './shared/Menu';

function App() {
    return (
        <>
            <Menu/>

            <div className="App">
                <Routes/>
            </div>
        </>
    );
}

export default App;
