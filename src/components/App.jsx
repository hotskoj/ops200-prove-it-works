import React, {useState} from 'react';
import Mortgage from '../lib/Mortgage';

export default function App(){
    const [inputs, setInputs] = useState({
        principal: 0,
        interest: 0,
        term: 0,
        period: 12
    });
    const [output, setOutput] = useState("");

    function handleChange(event) {
        const {name, value} = event.target;
        setInputs((prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        }))
    }

    function calculateMonthly() {
        let mortgage = new Mortgage(inputs.principal, inputs.interest, inputs.term, inputs.period);
        let monthlyPayment = mortgage.monthlyPayment();
        setOutput(monthlyPayment);
    }

    return (
        <div className='App'>
            <h1> Mortgage Calculator  </h1>
            <input onChange={handleChange} name='principal' value={inputs.principal} />
            <input onChange={handleChange} name='interest' value={inputs.interest}/>
            <input onChange={handleChange} name='term' value={inputs.term}/>
            <select onChange={handleChange} name='period' value={inputs.period}>
                <option value='12'>Monthly</option>
                <option value='4'>Quarterly</option>
            </select>
            <button onClick={calculateMonthly} id='calculate'>Calculate</button>
            <p id='output'>${output}</p>
        </div>
    )
}