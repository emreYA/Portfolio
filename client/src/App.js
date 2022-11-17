import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
import Login from './pages/Login';
import HireMe from './pages/HireMe';
import { useSelector } from 'react-redux';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/hireme" element={<HireMe/>}/>
        <Route path="/login" element={currentUser ? <Home/> : <Login/> }/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={currentUser ? <UserProfile/> : <Home/> }/>
        <Route path="/product">
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
