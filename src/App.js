
import './App.css';
import { colorsArray } from './JS/SeedColors'
import Palette from './JS/Palette';
import { generatePalette } from './colorsHelpers';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(colorsArray[1])} />
    </div>
  );
}

export default App;
