import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Password() {
    const [length, setLength] = useState(6);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumbers] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [password, setPassword] = useState("");

    const handleGenerate = () => {
        let set = "";
        if (uppercase) { set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
        if (lowercase) { set += "abcdefghijklmnopqrstuvwxyz" }
        if (number) { set += "1234567890" }
        if (symbol) { set += "!@#$%&*_-/?^" }
        // console.log(set)
        let generatedPassword = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random()*set.length)
            generatedPassword += set[randomIndex];
        }
        setPassword(generatedPassword)

    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(password);
        toast.success("Password copied to your clipboard")
    }
    return (
        <div className='mainbox'>
            <div className='bg-dark text-warning con mt-3 mb-1 p-5 rounded-5'>
                <h1>Password Generator</h1>
                <div className='input-groupsc'>
                    <div className=''>
                        <label>Password Length</label>
                        <input type='number'
                            className='mx-3 w-50 m-auto rounded-2 mt-2 px-3'
                            value={length}
                            onChange={(event) => setLength(event.target.value)}
                        ></input>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className='check-boxes'>
                                <input
                                    className='mt-3 mx-2'
                                    type='checkbox'
                                    checked={uppercase}
                                    onChange={(event) => setUppercase(event.target.checked)}
                                ></input>
                                <label>Include Uppercase</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='check-boxes'>
                                <input
                                    className='mt-3 mx-2'
                                    type='checkbox'
                                    checked={lowercase}
                                    onChange={(event) => setLowercase(event.target.checked)}
                                ></input>
                                <label>Include Lowercase</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='check-boxes'>
                                <input
                                    className='mt-3 mx-2'
                                    type='checkbox'
                                    checked={number}
                                    onChange={(event) => setNumbers(event.target.checked)}
                                ></input>
                                <label>Include Numbers</label>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='check-boxes'>
                                <input
                                    className='mt-3 mx-2'
                                    type='checkbox'
                                    checked={symbol}
                                    onChange={(event) => setSymbol(event.target.checked)}
                                ></input>
                                <label>Include Symbols</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <button className='btn btn-outline-warning mt-3 mx-2' onClick={() => handleGenerate()}>Generate Passsword</button>
                        <input readOnly className=' py-2 rounded-3 mt-3 text-center' value={password} ></input>
                        <button className='btn btn-outline-info mt-3 mx-2' onClick={()=>handleCopy()}>Copy Passsword</button>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <p>Designed by <b>Christober</b></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Password