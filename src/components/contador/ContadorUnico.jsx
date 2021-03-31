import './Contador.css'
import React,{Component} from 'react'

class ContadorUnico extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    upPasso = (e) => {
        this.setState({
            passo: parseInt(e.target.value)
        })
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador Unico</h2>
                
                <div>
                    <h3>{this.state.numero}</h3>
                </div>
                
                <div>
                    <label htmlFor="inputForm"></label>
                    <input id="inputForm" value={this.state.passo} onChange={this.upPasso}/>
                </div>
                
                <div>
                    <button onClick={this.inc}> + </button>
                    <button onClick={this.dec}> - </button>
                </div>

            </div>
        )
    }
}

export default ContadorUnico