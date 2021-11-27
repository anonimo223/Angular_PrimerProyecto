import { Component, OnInit } from '@angular/core';

import { Sandias } from './sandias'; //Se importo el modelo UwU

@Component({
  selector: 'app-sandias',
  templateUrl: './sandias.component.html',
  styleUrls: ['./sandias.component.css']
})
export class SandiasComponent implements OnInit {

  public nombre_componente:string;
  public listado_nombres:string;
  public nombre:string = "Angie Juliana Lugo Franco";
  public dia: [string,string]=["Domingo","Viernes"];
  public B:boolean = false;
  public numero:number = 7;
  public arreglo1: number[] = [1, 16, 26];
  public arreglo2:Array<string>;
  public varios:Array<any>;

  public sand!: Sandias; //Declaracion de la propiedad de tipo objeto
  public inventario!:Array<Sandias>;
  //Color UwU
  public color:string;
  //Seleccion de color.
  public color_seleccionado:string;

  constructor() { 
    this.nombre_componente = "La Sandia D Min";
    this.listado_nombres = 'Namjoon, Jin, Yoongi, Hoseok, Jimin, Taehyung, Jungkook';
    this.arreglo2 = ['first','Sandias','Yoongi','Dylan'];
    this.varios = [1, 'Angie', true];

    //Objeto con los parametrros de construcción.
    this.sand = new Sandias('Zapote', 30, 'Zapato', true);

    this.inventario = [
      new Sandias('Map of the soul', 5, 'Caja', true),
      new Sandias('YouNeverWalkAlone', 10, 'Caja', true),
      new Sandias('Last Melody', 3, 'Estuche', true),
      new Sandias('Fallen', 2, 'Caja', false),
      new Sandias('Map of the soul: 7', 1, 'Caja', false)
    ]

    this.color = "purple";

    this.color_seleccionado = "#ccc";
  }

  saludo() {
    alert("holiii, que tengas una sanditastica bienvenida Uwu");
  }

  ngOnInit(): void {
    this.saludo();
    var uno = 16;
    var dos = 26;
    if (uno === 16) {
        let uno = 3;
        var dos = 89;
        console.log("Dentro del if " + uno);
    }
    console.log("fuera del if " + uno);
  }

  cambiarValor1(valor: boolean) {
    this.inventario[2].estado = valor;
  }
  cambiarValor2(valor: boolean) {
    this.inventario[2].estado = valor;
  }


}
