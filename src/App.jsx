import React from 'react'
import { createContext } from 'react'
import ModalComponent from './ModalComponent'
import { useReducer } from 'react'
export const TextContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "setActive":
            return { ...state, active: !state.active }
            break
        case "setColor":
            return { ...state, color: action.color }
            break
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
        active: false, color: 'white',
    })

    const toggle = () => {
        dispatch({
            type: 'setActive'
        })
    }

    var OrqaFon = (item) => {
        dispatch({
            type: 'setColor',
            color: item
        })
    }
    return (
        <TextContext.Provider value={{ active: state.active, color: state.color, setColor: OrqaFon, setActive: () => { } }}>
            <div className='container my-5 p-3'>
                <button className='btn btn-success btn-sm' onClick={toggle}>ActiveToggle</button>

                <h1>App</h1>
                <ModalComponent />
            </div>
        </TextContext.Provider>

    )

}

export default App