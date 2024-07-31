import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import Profile from './page/Profile';
import ProductPage from './page/ProductPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
      <div>
        <h1>Hello Dear!!!</h1>
        <Routes>
          <Route path='/' element={<Homepage /> }> </Route>
          <Route path='/about' element={<About /> }> </Route>
          <Route path='/profile' element={<Profile /> }> </Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='/products/:id' element={ <ProductDetailPage />}></Route>
        </Routes>

      </div>
  );
}

export default App;
