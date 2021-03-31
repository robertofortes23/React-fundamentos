import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Gabriel" idade={25} nerd={true} ></DiretaFilho>
            <DiretaFilho nome="Ailton" idade={17} nerd={false} ></DiretaFilho>
        </div>
    )
}