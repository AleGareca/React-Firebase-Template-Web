import React, { Component } from 'react'
import './assets/css/style.css'
import imagen1 from'./assets/img/about-mission.jpg'
import imagen2 from'./assets/img/about-plan.jpg'
import imagen3 from'./assets/img/about-vision.jpg'

export default class SobreNosotros extends Component {

    renderHeader(titulo,descriopcion){
        return(<div>
                    <header class="section-header">
                        <h3>{titulo}</h3>
                        <p>{descriopcion}</p>
                    </header>
                </div>)
    }

    renderCard(image,delay,iconCss,titulo,descriopcion){
        return(<div class="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div class="about-col">
              <div class="img">
                <img src={image} alt="" class="img-fluid"/>
                <div class="icon"><i class={"ion-ios-"+iconCss+"-outline"}></i></div>
              </div>
              <h2 class="title"><a href="#">{titulo}</a></h2>
              <p>
                {descriopcion}
              </p>
            </div>
          </div>)
    }



    render() {
        return (
            <div>
                <section id="about">
                    <div class="container">
                        {this.renderHeader("Sobre Nosotros","Hay que poner un texto extenso hablando sobre la empresa o lo que sea")}
                            <div class="row about-cols">
                                {this.renderCard(imagen1,"","speedometer","Nuestra mision","El titulo da ejemplo a los que puede ir en esta seccion")}
                                {this.renderCard(imagen2,"0.1s","list","Nuestros Planes","El titulo da ejemplo a los que puede ir en esta seccion")}
                                {this.renderCard(imagen3,"0.2s","eye","Nuestra vision","El titulo da ejemplo a los que puede ir en esta seccion")}
                            </div>
                    </div>
                 </section>
            </div>)
    }
}
