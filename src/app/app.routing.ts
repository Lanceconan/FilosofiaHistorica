//Se importan las bases y funcionalidades de angular
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ViewFilosopherComponent } from './components/view-filosopher/view-filosopher.component';
import { ViewHistoricalContextComponent } from './components/view-historical-context/view-historical-context.component';
import { AppComponent } from './app.component';
import { CardFilosopherComponent } from './components/card-filosopher/card-filosopher.component';
import { CardHistoricContextComponent } from './components/card-historic-context/card-historic-context.component';


//Se importan componentes


//se definen las rutas
const appRotes: Routes = [
    {path : '', component : AppComponent},
    {path : 'filosofos', component : ViewFilosopherComponent},
    {path : 'contexto-historico', component : ViewHistoricalContextComponent}, 
    {path : 'test', component : CardHistoricContextComponent}, 
];

//utilizar configuración de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRotes);