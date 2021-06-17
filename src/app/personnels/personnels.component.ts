import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {PersonnelsService} from "../controller/service/personnels.service";
import {Personnels} from "../controller/model/personnels.model";

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  constructor(private personnelsService: PersonnelsService) { }
  public save(){
    this.personnelsService.save();
  }


  ngOnInit(): void {
  }

}
