import React, { Component } from 'react'
import Carrucel from './Carrucel'
import  Header from './Header'
import  Servicios from './Servicios'
import  SobreNosotros from './SobreNosotros'
import Habilidades from './Habilidades'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carrucel/>
                <Servicios/>
                <SobreNosotros/>
                <Habilidades/>
            </div>
        )
    }
}
