import React, { Component } from 'react'
import './assets/css/style.css'
import imagen1 from './assets/img/intro-carousel/1.jpg'
import imagen2 from './assets/img/intro-carousel/2.jpg'
import imagen3 from './assets/img/intro-carousel/3.jpg'
import imagen4 from './assets/img/intro-carousel/4.jpg'
import imagen5 from './assets/img/intro-carousel/5.jpg'




export default class Carrucel extends Component {

 constructor(props) {
    super(props);

    this.state = {   
      image: [imagen2,imagen3,imagen4,imagen5],
    };

 }



      renderCarrucelItemActive(imagen,titulo,descripcion){
        return(<div class="carousel-item active">
              <div class="carousel-background"><img src={imagen} alt=""/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
              </div>
            </div>
        </div>)
      }

      renderCarrucelItem(imagen,titulo,descripcion){
        return(<div class="carousel-item ">
              <div class="carousel-background"><img src={imagen} alt=""/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
              </div>
            </div>
        </div>)
      }



    render() {
        return (<div id= "intro">
    <div class="intro-container">
        <div id="carouselExampleCaptions" class="carousel  slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    
      {this.renderCarrucelItemActive(imagen1,"Gente en una mesa","Hay una imagen de gente en una mesa")}
      {this.renderCarrucelItem(imagen2,"No me acuerdo","No me acuerdo que imagen es esta")}
      {this.renderCarrucelItem(imagen3,"No me acuerdo","Lo mismo que en la imagen anterior")}      
      {this.renderCarrucelItem(imagen4,"Intento","Deberia renderizar todo en un map")}
      {this.renderCarrucelItem(imagen5,"Bajon","Que bajon es escribir esto")}
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>

        )
    }
}
