import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import Cart from './components/Cart';
import Mypage from './components/Mypage';
import StyledApp from './styles/Appstyle';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom"

function App() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <StyledApp>
      <BrowserRouter>    
      <div className="App">
        <div className="header">
          <img src="/" className="logo_area"/>
          <div className="account">
            <Link to="register"><p>회원가입</p></Link>
            <Link to="login"><p>로그인</p></Link>
          </div>
        </div>
        <div className="gnb">
          <ul className="list_nav">
            <li className="nav_item"><Link to="" className="nav-link" onClick={() => setActiveNav(1)}><p className={activeNav === 1 ? "nav_item active" : "nav_item"}>홈</p></Link></li>
            <li className="nav_item"><Link to="product" className="nav-link" onClick={() => setActiveNav(2)}><p className={activeNav === 2 ? "nav_item active" : "nav_item"}>과일 담기</p></Link></li>
            <li className="nav_item"><Link to="cart" className="nav-link" onClick={() => setActiveNav(3)}><p className={activeNav === 3 ? "nav_item active" : "nav_item"}><ShoppingCartIcon /></p></Link></li>
            <li className="nav_item"><Link to="mypage" className="nav-link" onClick={() => setActiveNav(4)}><p className={activeNav === 4 ? "nav_item active" : "nav_item"}><PersonIcon /></p></Link></li>
          </ul>
        </div>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="product" exact element={<Product />} />
            <Route path="cart" exact element={<Cart />} />
            <Route path="mypage" exact element={<Mypage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </div>  
    </BrowserRouter>
    </StyledApp>
  );
}

export default App;

