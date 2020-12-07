import React from "react";

function StockCard({stock, percentage, isIncreasing}) {
    return (
        <div className="stockContainer">
            <div className="header">
                <div id="arrow" data-testid="arrow-element" className={`${isIncreasing ? "up" : "down"}`}/>
                <div className="title"
                     data-testid="title-element">{stock.name}</div>
            </div>
            <div className="info">
                <div id="percentage" data-testid="percentage-element"
                     className={`${isIncreasing ? "percentage_up" : "percentage_down"}`}>{`${isIncreasing ? "+" : "-"}${percentage}%`}</div>
                <div className="price"
                     data-testid="price-element">{stock.price}</div>
            </div>
        </div>
    );
}

export default StockCard;
