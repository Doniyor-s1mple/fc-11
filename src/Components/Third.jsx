import React from 'react'
import { useContext } from 'react'
import { TextContext } from '../App'

const Third = () => {

    var PropsObj = useContext(TextContext)
    return (
        <div>   
            <h2>Third</h2>
        </div>
    )
}

export default Third