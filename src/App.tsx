import './App.css'
import { SetStateAction, useEffect, useState } from 'react';

function App() {
    const [hex, setHex] = useState<string>('0')
    const [binaryHead, setBinaryHead] = useState<number[]>([])

    function hexToDecimal(hex: string) {
        return parseInt(hex, 16)
    }

    function hexToBinary(hex: string) {
        return (parseInt(hex, 16).toString(2))
    }

    function handleChange(e: { target: { value: SetStateAction<string>; }; }) {
        setHex(e.target.value)
    }

    useEffect(() => {
        let decimalArray: number[] = [1]

        for (let i = 1; i < hexToBinary(hex).split('').length; i++) {
            decimalArray.push(decimalArray[decimalArray.length - 1] * 2)
        }

        decimalArray.reverse()
        setBinaryHead(decimalArray)
    }, [hex])

    return (
        <div className='container'>
            <nav>
                <h1>HEX to DEC and BIN</h1>
            </nav>
            <section className='user-input-section'>
                <div className='card'>
                    <label htmlFor='userInput'>HEX: </label>
                    <input name='userInput' onChange={handleChange} maxLength={5} type='text'
                           placeholder='Enter HEX number'/>
                </div>
            </section>
            <section className='results-table-section'>
                <h2>Overview</h2>
                <div className='card'>
                    <table className='results-table-summary'>
                        <thead>
                        <tr>
                            <td>HEX</td>
                            <td>DEC</td>
                            <td>BIN</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{(hex === '' ? '0' : hex.toString())}</td>
                            <td>{(hex === '' ? '0' : hexToDecimal(hex))}</td>
                            <td>{(hex === '' ? '0' : hexToBinary(hex))}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='visualize-table-section'>
                <h2>Calculation visualization in Decimal</h2>
                <div className='card'>
                    <table className='visualization-table'>
                        <thead>
                        <tr>
                            {binaryHead.map((number) => <td>{number}</td>)}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {hexToBinary(hex).split('').map((value) => <td>{value}</td>)}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <footer>
                Made by <a href='https://kankaj.cz' target='_blank'>Jaroslav Kaňka</a> 2023
            </footer>
        </div>
    )
}

export default App
