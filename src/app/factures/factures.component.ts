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
 public findByReference(reference:string){
    return this.facturesService.findByReference(reference);
 }
 public findByType(type:string){
    return this.facturesService.findByType(type);
 }
 public findByDate(date:Date){
    return this.facturesService.findBydate(date);
 }
 public deleteByReference(reference:string){
    return this.facturesService.deleteByReference(reference);
 }
 public deleteByType(type:string){
    return this.facturesService.deleteByType(type);
 }
  ngOnInit(): void {
  }

}
