import { Component, OnInit } from '@angular/core';
import {AchatsService} from "../controller/service/achats.service";
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {findAll} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {



  constructor(private clientsService: ClientsService, private modalService: NgbModal ) { }
  public save(){
    this.clientsService.save();
  }
  public findByReference(reference:string){
    return this.clientsService.findByReference(reference);
  }
  public findByCode(code:string){
    return this.clientsService.findByCode(code);

  }
  public deleteByReference(reference:string, index: number){
    return this.clientsService.deleteByReference(reference,index);
  }
  public deleteByCode(code:string){
    return this.clientsService.deleteByCode(code);
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.clientsService.findAll();
  }

  get clients(): Clients {
    return this.clientsService.clients;
  }
  get listclients(): Array<Clients> {
    return this.clientsService.listclients;
  }
  public update(i: number, client: Clients): void{
    this.clientsService.update(i,client);
  }
  open(content): void {
    this.modalService.open(content);
  }
}
