import { Component, OnInit } from '@angular/core';
/**
 * @description Componente persona en donde se establecen el nombre, apellido y ciudad
 * 
 * @author Keryn García Espitaleta <keryngarcia@hotmail.es>
 */
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // declaracon de variables
  nombre: string ;
  ciudad: string ;
  apellido: string;

  /**
   * constructor 
   */
  constructor() { 
  
  }

  /**
   * getteres y setteres
   */
  /*
  getNombre(): string{
    return this.nombre
  }

  setNombre(nombre: string):void{
    this.nombre = nombre;
  }

  getApellido():string{
    return this.apellido;
  }

  setApellido(apellido: string):void{
    this.apellido = apellido;
  }

  getCiudad(){
    return this.ciudad;
  }

  setCiudad(ciudad: string):void{
    this.ciudad = ciudad;
  }*/

  
  ngOnInit() {
    // se asigna valor a las variables (quemado)
    this.nombre = 'Keryn';
    this.apellido = 'García';
    this.ciudad = 'Cereté'
  }

}
