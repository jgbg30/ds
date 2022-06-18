import React, { useState } from 'react'
import './Picker.css'


const Picker = () => {
    const [color, setColor] = useState('')


    return (
        <div className='colorPicker' style={{ background: color }}>
            <div className='picker'>
                <h1>Elige un color</h1>
                <div className='d-flex justify-center'>

                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className='inputText' />
                   
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='inputColor' />

                </div>
            </div>
        </div>
    )
}

export default Picker