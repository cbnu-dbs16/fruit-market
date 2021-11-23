import React from "react";
import Product from "../Product";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

const Home = () => {
    const primary = {
        10: '#000',
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#80BFFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0059B2',
        800: '#004C99',
        900: '#003A75',
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
      
        &:hover {
          color: #000;
        }
      
        &.${buttonUnstyledClasses.focusVisible} {
          color: #000;
          outline: none;
        }
      
        &.${tabUnstyledClasses.selected} {

        }
      
        &.${buttonUnstyledClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
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
                  <Tab>장바구니</Tab>
                </TabsList>
                <TabPanel value={0}>Home content</TabPanel>
                <TabPanel value={1}><Product></Product></TabPanel>
                <TabPanel value={2}>Basket content</TabPanel>
            </TabsUnstyled>
            
        </div>
    )
}
export default Home;