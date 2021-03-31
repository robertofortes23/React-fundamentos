import React, { Component } from 'react'

import {getRandom} from '../basico/Aleatorio'

class MegaSozinho extends Component {
    state = {
        qtdNumeros: this.props.qtdInicial || 6,
        numero: 0,
        dezenas: []
    }

    attQtd = (e) => {
        this.setState({
            qtdNumeros: parseInt(e.target.value)
        })
    }

    checarGerar = (arrei) => {
        this.state.numero = getRandom(1, 60)
        
        if(arrei.filter((ret => {return ret == this.state.numero})).length > 0){
            this.checarGerar(arrei)
        }else{
            arrei.push(this.state.numero)
        }
        return arrei
    }

    
    gerarDezenas = () => {
        let qtdDezenas = parseInt(this.state.qtdNumeros)
        let Dezenas = []
        let dezTrat = []
        let check = 0
        for (let index = Dezenas.length; index < qtdDezenas; index++) {
            
           Dezenas = this.checarGerar(Dezenas)
        }
        let dezOrg = Dezenas.sort(function(a, b) {
            return a - b;
        });

        dezOrg.forEach((num)=>{
            if(num < 10){
                dezTrat.push('0'+num)
            }else{
                dezTrat.push(String(num))
            }
        })

        dezTrat = dezTrat.join(' - ')
        this.setState({
            dezenas: dezTrat
        })
    }


    render() {
        return (
            <div>
                <h2>Mega</h2>
                <hr/>

                    <div>Quantidade de dezenas: {this.state.qtdNumeros}</div>

                <div>
                    <label htmlFor="qtdNumeros"></label>
                    <input id="qtdNumeros" value={this.state.qtdNumeros} onChange={this.attQtd}/>
                </div>

                <div>
                    <button onClick={this.gerarDezenas}>Gerar Dezenas</button>
                </div>


                <div>
                    {this.state.dezenas.length > 0? this.state.dezenas : ''}
                </div>
                
            </div>
        )
    }

}

export default MegaSozinho