import React from 'react'
import {getRandom} from '../basico/Aleatorio'

export default (props) => {
    const funcRet = props.aoClicar
    let id_min = 50
    let id_max = 70
    const idade = getRandom(id_min, id_max)
    const nerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={(e)=>{funcRet("João", idade, nerd)}}>Fornecer Informações</button>
        </div>
    )

}