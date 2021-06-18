import { Component, OnInit } from '@angular/core';
import {AchatsService} from "../controller/service/achats.service";
import {Achats} from "../controller/model/achats.model";

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  constructor(private achatsService:AchatsService) { }
  public save(){
    this.achatsService.save();
  }
  public findByMontant(montant:number){
    return this.achatsService.findByMontant(montant);
  }
  public findAll(){
    this.achatsService.findAll();
  }
  public findByReference(reference:string) {
    return this.achatsService.findByReference(reference);
  }
  public findByDate(date:Date){
    return this.achatsService.findByDate(date);
  }

  get achats_Service(): AchatsService {
    return this.achatsService;
  }
  public deleteByreference(reference:string){
    return this.achatsService.deleteByReference(reference);
  }

  get achats(): Achats {
    return this.achatsService.achats;
  }
  get listachats(): Array<Achats>{
    return this.achatsService.listachats;
  }
  ngOnInit(): void {
    this.findAll();
  }

}
