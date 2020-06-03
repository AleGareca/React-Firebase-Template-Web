import React, { Component } from 'react'


export default class Header extends Component {

    renderTitulo(nombreDeEmpresa){
      return(<div id="logo" className="pull-left">
                  <h1><a href="#intro" className="scrollto">{nombreDeEmpresa} </a></h1>
                  <a href="#intro"></a>
             </div>)
    }
  
  renderNav(){
    return(<nav id="nav-menu-container">
              <ul className="nav-menu ">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">Sobre nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </nav>)
  }
    render() {
        return(<header id="header">
                  <div className="container-fluid">
                    {this.renderTitulo("Nombre de empresa")}                  
                    {this.renderNav()}  
                  </div>
                </header>)
              }
}
