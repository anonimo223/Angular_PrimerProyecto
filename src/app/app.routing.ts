
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from "./app.component";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { SandiasComponent } from "./sandias/sandias.component";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes =[
    {path:'', component:HomeComponent},
    {path:'empleado', component:EmpleadoComponent},
    {path:'sandias', component:SandiasComponent},
    {path:'home', component:HomeComponent},
];

export const appRoutingProvider: any[]=[];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

