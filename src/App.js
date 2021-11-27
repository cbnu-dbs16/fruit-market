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
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
// import { Outlet } from "react-router";
import { Link } from "react-router-dom"

function App() {
  const primary = {
    10: '#000',
    700: '#0059B2'
  };
  
  const Tab = styled(TabUnstyled)`
    color: ${primary[10]};
    cursor: pointer;
    font-size: 1rem;
    padding: 15px 20px;
    border: none;
    display: flex;
    margin: auto;
  
    &.Mui-selected {
      color: ${primary[700]};
      font-weight: bold;
    }
  `;
  
  // const TabPanel = styled(TabPanelUnstyled)`
  //   width: 100%;
  //   margin: auto;
  // `;
  
  const TabsList = styled(TabsListUnstyled)`
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    display: flex;
    align-content: space-between;
  `;
  return (
    <StyledApp>
      <BrowserRouter>    
      <div className="App">
        <div className="navbar">
          {/* <Logo/> */}Logo
          <Link to="register">회원가입</Link>
          <Link to="login">로그인</Link>
        </div>
        <div className="bar">
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>
                <Link to="home">홈</Link>
              </Tab>
              <Tab>
                <Link to="product">과일 담기</Link>
              </Tab>
              <Tab>
                <Link to="cart"><ShoppingCartIcon /></Link>
              </Tab>
              <Tab>
                <Link to="mypage"><PersonIcon /></Link>
              </Tab>
            </TabsList>
          </TabsUnstyled>
        </div>
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </StyledApp>
  );
}

export default App;

