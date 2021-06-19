import { Component, OnInit } from '@angular/core';
import {VentesService} from "../controller/service/ventes.service";
import {Ventes} from "../controller/model/ventes.model";
import {Achats} from "../controller/model/achats.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {

  constructor(private ventesService: VentesService,private modalService: NgbModal) { }
  public save(){
    this.ventesService.save();
  }
   public findByDate(date:Date){
    return this.ventesService.findByDate(date);
   }
   public findByReference(reference:string){
    return this.ventesService.findByReference(reference);
   }
   public findByMontant(montant:string){
    return this.ventesService.findByMontant(montant);
   }
   public deleteByDate(date:Date){
    return this.ventesService.deleteByDate(date);
   }
   public deleteByReference(reference:number, i: number){
    return this.ventesService.deleteByReference(reference,i);
   }
  get ventes(): Ventes {
    return this.ventesService.ventes;
  }
  get listventes(): Array<Ventes>{
    return this.ventesService.listventes;
  }
  ngOnInit(): void {
    this.findAll();
  }
  update(index: number): void{
    return this.ventesService.update(index);
  }

  private findAll() {
    this.ventesService.findAll();
  }
  open(content): void {
    this.modalService.open(content);
  }
}
