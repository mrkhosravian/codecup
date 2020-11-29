import React, {useState} from 'react';
import Input from "./Input";
import citiesSensitive from './cities.json'

function App() {
    const [hint, setHint] = useState('')
    const cities = Array.from(citiesSensitive)
    return <div>
        <Input handleChange={(e) => {
            const value = e.target.value
            const regexStr = `^${value}`
            const regex = new RegExp(regexStr, 'i')
            const mayHint = value === ""
                ? ''
                : cities
                    .find(city => city.match(regex))
            if (mayHint === undefined)
                setHint('')
            else
                setHint(value.substr(0, value.length) + mayHint.substr(value.length))
        }} hint={hint}/>
    </div>
}

export default App;
