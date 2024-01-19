import ContactCard from './ContactCard.js'
import InfoCard from './InfoCard.js'
import './PortfolioSection.css'
import PriceSection from './PriceSection.js'
import TransactionSection from './TransactionSection.js'

export default function PortfolioSection(){
    return(
        <div className='uppergrid'>
           <div className="grid-container">
                <div className="grid-first grid-item item1">
                    <div className='portvalue'>
                        <p className='moneytitle'>Portfolio Value</p>
                        <p>Rs. 720000</p>
                    </div>
                    <div className='walletvalue'>
                        <p className="moneytitle">Wallet Balance</p>
                        <p>Rs. 720000</p>
                    </div>
                    <div className='button-div'>
                        <button className="btn">Deposit</button>
                        <button className="btn">Withdraw</button>
                    </div>
                </div>
                <div className="grid-item item2">
                  <PriceSection/>
                </div>
                <div className="grid-item item3"><TransactionSection/>
                </div>  
                <div className="grid-item item4"><InfoCard/></div>
                <div className="grid-item item5"><ContactCard/></div>
            </div>
        </div>
    
    )
}