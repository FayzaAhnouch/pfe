import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {FacturesService} from "../controller/service/factures.service";
import {Factures} from "../controller/model/factures.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Achats} from "../controller/model/achats.model";

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

  constructor(private facturesService: FacturesService, private modalService: NgbModal) { }
  public save(){
    this.facturesService.save();
  }
  public findAll(){
    this.facturesService.findAll();
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
 public deleteByReference(reference:number, index: number){
    return this.facturesService.deleteByReference(reference, index);
 }
 public deleteByType(type:string){
    return this.facturesService.deleteByType(type);
 }
  ngOnInit(): void {
    this.findAll();
  }
  open(content): void {
    this.modalService.open(content);
  }
  get factures(): Factures {
    return this.facturesService.factures;
  }
  get listfactures(): Array<Factures>{
    return this.facturesService.listfactures;
  }
  update(index: number): void{
    this.facturesService.update(index);
  }
}
