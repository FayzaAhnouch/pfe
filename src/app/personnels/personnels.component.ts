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
   public findByDatedembauche(datedembauche:Date){
    return this.personnelsService.findByDatedembauche(datedembauche);
   }
   public findByDatederetraite(datederetraite:Date){
    return this.personnelsService.findBydatederetraite(datederetraite);
   }
   public findBySalairedebase(Salairedebase:string){
    return this.personnelsService.findBySalairedebase(Salairedebase);
   }
   public deleteByDatedembauche(datedembauche:Date){
    return this.personnelsService.deleteByDatedembauche(datedembauche);
   }
     public  deleteBySalairedebase(salairedebase:string){
    return this.personnelsService.findBySalairedebase(salairedebase);
   }

  ngOnInit(): void {
  }

}
