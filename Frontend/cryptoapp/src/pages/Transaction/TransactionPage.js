import DashboardLayout from "../../components/DashboardLayout";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import './TPage.css'
import TransactionTable from "./component/TransactionTable";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ px:3, paddingBottom:3}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function TransactionPage(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabs = [
        {
          index:0,
          name: "All",
          count: 349,
        },
        {
          index:1,
          name: "Deposit",
          count: 114,
        },
        {
          index:2,
          name: "Widthdraw",
          count: 55,
        },
        {
          index:3,
          name: "Trade",
          count: 50,
        },
      ];
    
    return(
       <DashboardLayout title="Transactions">
        <div className="exportcsvcontainer">
            <button className="exportcsvbtn">Export CSV</button>
        </div>
        <div className="containerT">
        <Box py="6px" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" > 
                    {tabs.map((tab) => (
               
                    <Tab
                        className="tabbutton"
                        key={tab.index}
                        label={tab.name}
                        {...a11yProps(tab.index)}
                    ></Tab>
                    ))}
                    <div className='search'>
                    <SearchIcon></SearchIcon>
                    <input
                        id="quick_search"
                        className="seacrhinput"
                        name="quick_search"
                        placeholder="Search by ID"
                    /> 
                   
                    </div>
                </Tabs>
              
                </Box>
                <CustomTabPanel className="panel" value={value} index={0}>
                <TransactionTable/>
                </CustomTabPanel>
                <CustomTabPanel className="panel" value={value} index={1}>
                <TransactionTable/>
                </CustomTabPanel>
                <CustomTabPanel className="panel" value={value} index={2}>
                <TransactionTable/>
                </CustomTabPanel>
                <CustomTabPanel className="panel" value={value} index={3}>
                <TransactionTable/>
                </CustomTabPanel>
        </div>
       </DashboardLayout>
    )
}