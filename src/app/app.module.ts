import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AchatsComponent } from './achats/achats.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientsComponent } from './clients/clients.component';
import {HttpClientModule} from "@angular/common/http";
import { CnssComponent } from './cnss/cnss.component';
import { FacturesComponent } from './factures/factures.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { VentesComponent } from './ventes/ventes.component';
import {CommonModule} from "@angular/common";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AchatsComponent,
    ClientsComponent,
    CnssComponent,
    FacturesComponent,
    PersonnelsComponent,
    VentesComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
