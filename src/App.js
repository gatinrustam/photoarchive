import React, {useState} from 'react';
import './App.sass';
import { PhotoList } from './components/PhotoList/PhotoList';
import { Header } from './components/Header/Header';

function App() {
  const [grid, setGrid] = useState(3);
  const updateData = (grid) => setGrid(grid);

  return (
    <div className="app">
      <Header
        updateData={updateData}
      />
      <PhotoList 
        grid={grid}
      />
    </div>

  );
}

export default App;
