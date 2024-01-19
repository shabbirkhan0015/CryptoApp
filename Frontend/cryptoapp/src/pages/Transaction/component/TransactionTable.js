import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TransactionTable.css'
const TransactionTable = () => {
    const tableData = [
      {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "INR Deposit",
          tag: "E-Transfer",
        },
        amount: "+₹81,123",
        status: "pending",
      },
      {
        id: "HD82NA4H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "INR Widthdraw",
          tag: "Wire Transfer",
        },
        amount: "-₹55,123",
        status: "processing",
      },
      {
        id: "HD82NA5H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Buy",
          tag: "BTC",
        },
        amount: "12.0554484 BTC",
        status: "cancelled",
      },
      {
        id: "HD82NA6H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Sell",
          tag: "BTC",
        },
        amount: "-2.0554484 BTC",
        status: "completed",
      },
      {
        id: "HD82NA7H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "BTC Deposit",
        },
        amount: "+15.5000000",
        status: "pending",
      },
      {
        id: "HD82NA8H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "BTC Widthdraw",
        },
        amount: "-5.05555544",
        status: "completed",
      },
    ];
  
    const statusColor = {
      pending: "#797E82",
      processing: "#F5A50B",
      completed: "#059669",
      cancelled: "#DC2626",
    };

    return (
        <TableContainer component={Paper}  py="0px">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" variant="simple" colorScheme="#797E82">
        <TableHead>
          <TableRow>
            <TableCell className='greytext' align="justify">ID</TableCell>
            <TableCell className='greytext' align="justify">Date & Time</TableCell>
            <TableCell className='greytext' align="justify">Type</TableCell>
            <TableCell className='greytext' align="justify">Amount</TableCell>
            <TableCell className='greytext' align="justify">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="darktext" align="justify" component="th" scope="row" fontSize="sm" fontWeight="medium">
                {data.id}
              </TableCell>
              <TableCell align="justify" fontSize="sm">   
                     <div className="darktext">{data.date}</div>
                    <div className='greytext'>{data.time}</div>
                    </TableCell>
              <TableCell align="justify" >
                    <div className="darktext">{data.type.name}</div>
                    <div className='greytext'>{data.type.tag}</div>
              </TableCell>
              <TableCell className="darktext" align="justify" >{data.amount}</TableCell>
              <TableCell className="darktext" align="justify" >
              <span
                    style={{
                        backgroundColor: statusColor[data.status],
                        color: "white",
                        borderRadius: "10px",
                        padding: "0.25rem 0.5rem", // Adjust padding as needed
                    }}
                    >
                    {data.status}
                    </span>

                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
    }
 export default TransactionTable;