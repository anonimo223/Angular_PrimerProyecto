import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public titulo = 'Pagina del empleado';
  public empleado:Empleado;

  constructor() {
    this.empleado = new Empleado('Lugo', 18, 'Femenino', 2000000);
   }

  ngOnInit(): void {
  }

}
