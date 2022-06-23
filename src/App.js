import Listing from './components/Listing';
import './main.css';
import data from './data/etsy';


function App() {
  return (
    <div className="App">
      <Listing items = {data}/>
    </div>
  );
}

export default App;
