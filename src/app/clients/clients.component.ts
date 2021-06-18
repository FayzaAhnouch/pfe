import { Component, OnInit } from '@angular/core';
import {AchatsService} from "../controller/service/achats.service";
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {



  constructor(private clientsService: ClientsService) { }
  public save(){
    this.clientsService.save();
  }
  public findByReference(reference:string){
    return this.clientsService.findByReference(reference);
  }
  public findByCode(code:string){
    return this.clientsService.findByCode(code);

  }
  public deleteByReference(reference:string){
    return this.clientsService.deleteByReference(reference);
  }
  public deleteByCode(code:string){
    return this.clientsService.deleteByCode(code);
  }

  ngOnInit(): void {
  }

}
