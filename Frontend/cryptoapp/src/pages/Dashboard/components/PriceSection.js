import './PriceSection.css'
export default function PriceSection(){
    return(
        <div className="pricesectioncontainer">
            <div className="pricetop">
                <div className="currentPrice">
                    <p className="currentptitle">Current Price</p>
                    <div className='pricetrend'>
                        <p className="currentpvalue">Rs. 22000</p>
                        <p className="currenttrent">22%</p>
                    </div>
                </div>
                <div className='pricebutton'>
                    <button className='btnprice'>Buy</button>
                    <button className='btnprice'>Sell</button>
                </div>
            </div>
            <div className='grap'>
                <img src="/graph.svg" alt="graph" />
            </div>
        </div>
    )
}