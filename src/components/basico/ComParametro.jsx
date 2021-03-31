import React from 'react'

export default function ComParametro(props) {
    const sit = props.nota >= 9 ? 'A' : props.nota >= 7 ? 'B' : props.nota >= 5 ? 'C' : 'Reprovado'
    return (
        <div>
            <h1>{ props.titulo }</h1>
            <p>
                { props.aluno } - { props.nota }<br></br>
                Situação: { sit }
            </p>
        </div>
    )
}