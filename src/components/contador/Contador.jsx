import './Contador.css'
import React, { Component } from 'react'


import Display from './Display'
import Passoform from './PassoForm'
import Botoes from './Botoes'


class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }
    // forma 1
    // constructor(props) {
    //     super(props)
    //     this.inc = this.inc.bind(this)
    //     this.dec = this.dec.bind(this)
    // }

    // inc() {
    //     this.setState({
    //         numero: this.state.numero + this.state.passo
    //     });
    // }

    // dec() {
    //     this.setState({
    //         numero: this.state.numero - this.state.passo
    //     });
    // }


    // forma 2

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


    // forma 3 na chamada da função usar arrow "onClick={e=>{this.inc}}"

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Passoform passo={this.state.passo} funcPasso={this.upPasso} />
                <Botoes up={this.inc} down={this.dec}/>
            </div>
        )
    }


}

export default Contador