import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" value={props.passo} onChange={props.funcPasso}/>
        </div>
    )
}