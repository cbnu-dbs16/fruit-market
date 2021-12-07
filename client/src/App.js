import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import Detail from './components/Product/detail';
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
import { Link } from "react-router-dom";

function App() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <StyledApp>
      <BrowserRouter>    
      <div className="App">
        <div className="header">
          <img src="mainlogo.png" className="logo_area" width={150} height={55} alt="logo"/>
          <div className="account">
            <ul className="list_menu">
              <li class="menu menu_join">
                <Link to="register" style={{padding: '0 11px 0 11px', color: '#5f0080'}}>회원가입</Link>
              </li>
              <li class="menu menu_login">
                <Link to="login" style={{padding: '0 11px 0 11px'}}>로그인</Link>
              </li>
              <li class="menu menu_center">
                <a href="#" style={{padding: '0 11px 0 11px'}}>고객센터</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="gnb">
          <ul className="list_nav">
          <Link to="" className="nav-link" onClick={() => setActiveNav(1)}><li className="nav_item"><p className={activeNav === 1 ? "nav_item active" : "nav_item"}>홈</p></li></Link>
          <Link to="product" className="nav-link" onClick={() => setActiveNav(2)}><li className="nav_item"><p className={activeNav === 2 ? "nav_item active" : "nav_item"}>과일 담기</p></li></Link>
          <Link to="cart" className="nav-link" onClick={() => setActiveNav(3)}><li className="nav_item"><p className={activeNav === 3 ? "nav_item active" : "nav_item"}><ShoppingCartIcon /></p></li></Link>
          <Link to="mypage" className="nav-link" onClick={() => setActiveNav(4)}><li className="nav_item"><p className={activeNav === 4 ? "nav_item active" : "nav_item"}><PersonIcon /></p></li></Link>
          </ul>
        </div>
        <div className="container">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="product" exact element={<Product />} />
            <Route path="detail/:name" exact element={<Detail />} />
            <Route path="cart" exact element={<Cart />} />
            <Route path="mypage" exact element={<Mypage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>  
    </BrowserRouter>
    </StyledApp>
  );
}

export default App;

