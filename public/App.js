import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/Layout/Layout';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Common/Login/Login';
import Men from './Pages/Men/Men';
import Cart from './Components/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import Women from './Pages/Women/Women';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
