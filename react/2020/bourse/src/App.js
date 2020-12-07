import React, {useEffect, useState} from "react";
import Charts from "./components/chart/Charts";
import StockCard from "./components/stockCard/StockCard";
import "./index.css";

function App({intervalTime}) {

    const [history, setHistory] = useState([])

    const [stock, setStock] = useState({
        name: "",
        price: 0
    })


    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:3001/stock")
                .then(response => response.json())
                .then(result => {
                    setStock({
                        name: result.name,
                        price: result.value
                    })

                    setHistory(h => {
                        return [...h.slice(Math.max(h.length - 49, 0)), {
                            name: result.name,
                            price: result.value
                        }]
                    })

                })
        }, intervalTime)
    }, [])

    const isIncreasing = history.length >= 2 ? history[history.length - 2].price <= history[history.length - 1].price : true

    return <div className="container">
        <StockCard stock={stock.price === 0 ? {name: "", price: "..."} : stock}
                   isIncreasing={isIncreasing}
                   percentage={history.length > 1 ? ((history[history.length - 1].price / history[history.length - 2].price)).toFixed(2) : ""}/>
        <Charts history={history}
        />
    </div>;
}

export default App;

