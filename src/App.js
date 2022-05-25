import NavBar from './components/NavBar.js'
import './App.css';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Cart from './components/Cart.js';
function App() {
  return (

    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/detail" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/*" element={<h1>Error 404</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
