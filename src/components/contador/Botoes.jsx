import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.up}> + </button>
            <button onClick={props.down}> - </button>
        </div>
    )
}