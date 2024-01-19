import './Transaction.css'
export default function TransactionSection(){

    const transactions = [
        {
          id: "1",
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "2",
          text: "BTC  Sell",
          amount: "- 12.48513391 BTC",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "3",
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
      ];
    
    return(
        <div className="transactionContainer">
            <div className="transaction-heading">Recent Transactions</div>
                {transactions.map((transaction, i) => (
                    <div key={transaction.id} className='transbox'> 
                        <div className='transdetails'>
                            <h6>{transaction.text}</h6>
                            <p>{transaction.timestamp}</p>
                        </div>
                        <h6>{transaction.amount}</h6>
                    </div>
                    
            ))}
            <button className='viewall'>View All</button>
        </div>
    )
    
    
}