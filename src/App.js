import React, { Component } from "react";
import "./style.css";

class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            numero:0,
            botao:'GO'
        }
        this.timer = null;
        this.iniciar = this.iniciar.bind(this)
        this.limpar = this.limpar.bind(this)
    }

    iniciar(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer=null;
            this.state.botao = 'GO';
        } else{
            this.timer = setInterval(()=>{
                let state = this.state; 
                state.numero += 0.1;
                this.setState(state);
            },100)
            state.botao = 'PAUSAR'
        }
        this.setState(state)
    }

    limpar(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer=null;
        }
        state.numero = 0;
        state.botao='GO'
        this.setState(state)
    }

    render(){
        return(
            <div className="container">
                <h1 className="text">Cronômetro</h1>
                <img src={require('./assets/cronometro.png')} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.iniciar}>{this.state.botao}  </a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        )
    }
}
export default App;