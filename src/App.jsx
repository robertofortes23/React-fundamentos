import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import MegaSozinho from './components/mega/MegaSozinho'
import ContadorUnico from './components/contador/ContadorUnico'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaProd from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Aleatorio from './components/basico/Aleatorio'
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Primeiro from './components/basico/Primeiro'
import Card from './components/layout/Card'
import Familia from './components/basico/Familia'
import FamiliaMembro from './components/basico/FamiliaMembro'

export default props => {
    return (
        <div className='App'>

            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo='#15 - Desafio Gerar múmeros da mega sena (leitão)' color="#724">
                    <Mega />
                </Card>

                <Card titulo="#14 - Desafio Gerar números da mega sena" color="#28B463">
                    <MegaSozinho />
                </Card>

                <Card titulo="#13 - Contador" color="#CCC">
                    <ContadorUnico numeroInicial={10}/>
                </Card>

                <Card titulo="#12 - Contador" color="#CCC">
                    <Contador numeroInicial={5}/>
                </Card>

                <Card titulo="#11 - Exemplo de Input" color="#FAC317">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#17FA8F">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#7417FA">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Renderização condicional" color="#33F0FF">
                    <ParOuImpar numero={21}></ParOuImpar>

                    <UsuarioInfo usuario={{}} />

                    {/* <UsuarioInfo usuario={{email: "aqui tem um email"}}/> */}

                </Card>

                <Card titulo="#07 - Desafio Lista de Produtos" color="#518">
                    <ListaProd />
                </Card>

                <Card titulo="#06 - Lista de Alunos" color="#852">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Card Familia" color="#00C8F8">
                    <Familia sobrenome="Suarez">
                        <FamiliaMembro nome="Pedrinho" />
                        <FamiliaMembro nome="Julia" />
                        <FamiliaMembro nome="Otavinho" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>


                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Luizinho"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}