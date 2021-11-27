import React from "react";
import Product from "../Product";
import Mypage from "../Mypage";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Home = () => {
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
      
      const TabPanel = styled(TabPanelUnstyled)`
        width: 100%;
        margin: auto;
      `;
      
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
        <div className="container">
            {/* <Logo/> */}Logo
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                  <Tab>홈</Tab>
                  <Tab>과일 담기</Tab>
                  <Tab><ShoppingCartIcon /></Tab>
                  <Tab><PersonIcon /></Tab>
                </TabsList>
                <TabPanel value={0}>Home content</TabPanel>
                <TabPanel value={1}><Product></Product></TabPanel>
                <TabPanel value={2}>Basket content</TabPanel>
                <TabPanel value={3}><Mypage></Mypage></TabPanel>
            </TabsUnstyled>
            
        </div>
    )
}
export default Home;