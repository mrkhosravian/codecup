import React from "react";

function Chart({history}) {
    // console.log(history.slice(Math.max(history.length - 50, 0)));
    return <div className="chartContainer">
        {
            history.map((item, i) => {
                return (
                    <div
                        className={`chart ${i === 0 ? "chart_up" : history[i - 1].price <= item.price ? "chart_up" : "chart_down"}`}
                        style={{height: (item.price / 7900000) * 300}}
                        key={i}/>
                )
            })
        }
    </div>;
}

export default Chart;
