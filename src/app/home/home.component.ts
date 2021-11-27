import { Component, OnInit } from '@angular/core';
import { Home } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'El Increible Mundo de Yoongi';
  public home:Home;

  constructor() {
    this.home = new Home('Amo a Yoongi')
   }

  ngOnInit(): void {
  }

}
