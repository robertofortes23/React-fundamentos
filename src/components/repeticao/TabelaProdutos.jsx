import React from 'react'
import prods from '../../data/produtos'

export default (props) => {

    const tab_rows = prods.map((prod, i) => {
        return (
            <tr key={prod.id}>
                <td>{`${prod.id}`}</td>
                <td>{`${prod.nome}`}</td>
                <td>{`${prod.preco}`}</td>
            </tr>
        )
    })

    return (
        <div>
            <table border={1} style={{margin:"15px auto"}}>

                <thead>

                    <tr>
                        <td>Identificador</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>

                </thead>

                <tbody>

                    {tab_rows}

                </tbody>

            </table>
        </div>
    )
}
