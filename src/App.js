import logo from './logo.svg';
import './App.css';
import { colorsArray } from './JS/SeedColors'
import Palette from './JS/Palette';

function App() {
  return (
    <div className="App">
      <Palette colors={colorsArray[6].colors} />
    </div>
  );
}

export default App;
