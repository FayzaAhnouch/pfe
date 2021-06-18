import { Component, OnInit } from '@angular/core';
import {VentesService} from "../controller/service/ventes.service";
import {Ventes} from "../controller/model/ventes.model";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {

  constructor(private ventesService: VentesService) { }
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
   public deleteByReference(reference:string){
    return this.ventesService.deleteByReference(reference);
   }
  ngOnInit(): void {
  }

}
