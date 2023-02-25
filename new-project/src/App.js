import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">      
      <Routes> 
        <Route path="/" element={<App/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

