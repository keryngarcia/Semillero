import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {EjemploService} from '../../services/ejemplo.service';
import { ComicDTO } from '../../dto/comic.dto';

/**
 * @description Componente bienvenida, el cual contiene la imagen de bienvenida al semillero
 * 
 * @author Diego Fernando Alvarez Silva <dalvarez@heinsohn.com.co>
 */
@Component({
  selector: 'bienvenida',
  templateUrl: './bienvenida-component.html',
})
export class BienvenidaComponent implements OnInit {
  
  public urlImagen : string;
  public comicDTO : ComicDTO;
  public lista : Array<any>;
  public listaJson : string;

  
  constructor(private router : Router, private activatedRoute: ActivatedRoute, private ejemploService: EjemploService) {
    console.log("entro al constructor del componente bienvenida");
  }

  ngOnInit(): void {
    this.urlImagen = "https://www.elempleo.com/sitios-empresariales/colombia/heinsohn-business-technology/img/elempleo-02.jpg";
    let data = this.activatedRoute.snapshot.params;
    
    console.log("Parametros recibidos " + data);

    this.ejemploService.consultarComics().subscribe(respuesta => {
      console.log(respuesta);
    });


    this.comicDTO = new ComicDTO(); 
    this.comicDTO.id = "1";    
    this.comicDTO.nombre = "BATMAN";
    this.comicDTO.editorial = "marvel";
    this.comicDTO.tematica = "ACCION";
    //this.comicDTO.coleccion = "norma";
    this.comicDTO.numeroPaginas = 50;
    this.comicDTO.estado = "ACTIVO";
    this.comicDTO.precio = 60,500.99;
    //this.comicDTO.cantidad = 1;
    this.comicDTO.tematica = "AVENTURAS"
    this.comicDTO.autores = "Pedrito Barrera";
    this.comicDTO.color = true;

    
    this.ejemploService.crearComic(this.comicDTO).subscribe(respuesta => {
      console.log(respuesta);
    });
   
    let objetocomic1 = {
     id : 1,
     nombre : "Capitan America", 
     editorial : "Marvel",
     temática : "acción",
     númeropaginas : "50",
     precio : "60,500.99",
     autores : "Pedrito Barrera",
     color : "true",
     fechaventa : 10-10-2019,
     estado : "Activo"

    }
    let objetocomic2 = {
      id : 2,
      nombre : "Iron man", 
      editorial : "Marvel",
      temática : "acción",
      númeropaginas : "50",
      precio : "60,500.99",
      autores : "Pedrito Barrera",
      color : "true",
      fechaventa : 10-10-2019,
      estado : "Activo"
 
     }

     let objetocomic3 = {
      id : 3,
      nombre : "Thor", 
      editorial : "Marvel",
      temática : "acción",
      númeropaginas : "50",
      precio : "60,500.99",
      autores : "Pedrito Barrera",
      color : "true",
      fechaventa : 10-10-2019,
      estado : "Activo"
 
     }

     let objetocomic4 = {
      id : 4,
      nombre : "Bruce Banner", 
      editorial : "Marvel",
      temática : "acción",
      númeropaginas : "50",
      precio : "60,500.99",
      autores : "Pedrito Barrera",
      color : "true",
      fechaventa : 10-10-2019,
      estado : "Activo"
 
     }

     let objetocomic5 = {
      id : 5,
      nombre : "Spiderman", 
      editorial : "Marvel",
      temática : "acción",
      númeropaginas : "50",
      precio : "60,500.99",
      autores : "Pedrito Barrera",
      color : "true",
      fechaventa : 10-10-2019,
      estado : "Activo"
 
     }
   
    this.lista = new Array<any>();
    this.lista.push(objetocomic1);
    this.lista.push(objetocomic2);
    this.lista.push(objetocomic3);
    this.lista.push(objetocomic4);
    this.lista.push(objetocomic5);

    this.listaJson = JSON.stringify(this.lista);

    delete objetocomic1.edad;

  }

  public ejecucionEventoClick( parametroEvento : any, numero : number ) : void {
    alert("Hola: " + parametroEvento + ' ' + numero);
    
  }

}