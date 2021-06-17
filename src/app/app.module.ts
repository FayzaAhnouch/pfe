import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AchatsComponent } from './achats/achats.component';
import {FormsModule} from "@angular/forms";
import { ClientsComponent } from './clients/clients.component';
import {HttpClientModule} from "@angular/common/http";
import { CnssComponent } from './cnss/cnss.component';
import { FacturesComponent } from './factures/factures.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { VentesComponent } from './ventes/ventes.component';

@NgModule({
  declarations: [
    AppComponent,
    AchatsComponent,
    ClientsComponent,
    CnssComponent,
    FacturesComponent,
    PersonnelsComponent,
    VentesComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
