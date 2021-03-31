import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default (props) => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(null)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome != '?' ? `${nome} - ` : ''}</span>
                <span><strong>{idade != 0 ? `${idade}` : ''}</strong></span>
                <span>{nerd != null ? nerd ? ' - É Nerd' : ' - Não é Nerd': ''}</span>
            </div>

            <IndiretaFilho aoClicar={fornecerInformacoes}/>
        </div>
    )
}