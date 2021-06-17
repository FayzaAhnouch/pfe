import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {FacturesService} from "../controller/service/factures.service";
import {Factures} from "../controller/model/factures.model";

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  constructor(private facturesService: FacturesService) { }
  public save(){
    this.facturesService.save();
  }

  ngOnInit(): void {
  }

}
