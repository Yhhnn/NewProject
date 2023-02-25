import './App.css';
import { Routes, Route } from "react-router-dom";
import Pokedex from './views/Pokedex';
import Pokemon from './views/Pokemon';
import Layout from './layout';
function App() {
  return (
    <div className="App">      
      <Routes> 
        <Route path="/" element={<Layout/>}>
          <Route index element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;