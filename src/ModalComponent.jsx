import React from 'react'
import { useContext } from 'react'
import { TextContext } from './App'

const ModalComponent = () => {
    const PropsObj = useContext(TextContext)
    var colors = ['white', 'black', 'red', 'blue', 'green']

    var bgModal = (item) => {
        PropsObj.setColor(item)
    }

    var modalStyle = {
        backgroundColor: PropsObj.color
    }


    return (
        <div>
            {
                PropsObj.active ?

                    <div className='row'>
                        <div className="col-md-6">
                            <div className="card" style={modalStyle} onClick={() => PropsObj.setActive(prev => !prev)}>

                                <div className="card-header">
                                    <h2>Active</h2>
                                </div>
                                <div className="card-body">
                                    <h4>Modal...</h4>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <h2>Active is false</h2>
            }
            <br />
            <hr />
            {
                colors.map((item, index) => <button key={index} className='btn btn-dark mx-1'
                    onClick={() => bgModal(item)}>{item}</button>)
            }
        </div>
    )
}

export default ModalComponent