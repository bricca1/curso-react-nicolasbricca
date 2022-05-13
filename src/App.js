import NavBar from './components/NavBar.js'
import './App.css';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
