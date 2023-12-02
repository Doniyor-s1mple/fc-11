import React from 'react'
import FirstComponent from './Components/FirstComponent'
import { createContext } from 'react'
import { useState } from 'react'
import ModalComponent from './ModalComponent'
export const TextContext = createContext()

const App = () => {

    const [active, setActive] = useState(false)
    const [color, setColor] = useState('white')


    const toggle = () => {
        setActive(prev => !prev)
    }
    return (
        <TextContext.Provider value={{ active, color, setColor, setActive }}>
            <div className='container my-5 p-3'>
                <button className='btn btn-success btn-sm' onClick={toggle}>ActiveToggle</button>

                <h1>App</h1>
                <ModalComponent />
            </div>
        </TextContext.Provider>

    )

}

export default App
