import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { CardFilosopherComponent } from './components/card-filosopher/card-filosopher.component';
import { CardHistoricContextComponent } from './components/card-historic-context/card-historic-context.component';
import { ViewFilosopherComponent } from './components/view-filosopher/view-filosopher.component';
import { ViewHistoricalContextComponent } from './components/view-historical-context/view-historical-context.component';
import { MaterialModule } from './app.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,    
    CardFilosopherComponent,
    CardHistoricContextComponent,
    ViewFilosopherComponent,
    ViewHistoricalContextComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
