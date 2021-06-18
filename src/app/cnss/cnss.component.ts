import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {CnssService} from "../controller/service/cnss.service";
import {Cnss} from "../controller/model/cnss.model";

@Component({
  selector: 'app-cnss',
  templateUrl: './cnss.component.html',
  styleUrls: ['./cnss.component.css']
})
export class CnssComponent implements OnInit {

  constructor(private cnssService: CnssService) { }
  public save(){
    this.cnssService.save();
  }
  public findByNumerocnss(numerocnss:string){
    return this.cnssService.deleteByNumeroCnss(numerocnss);
  }
public findByReference(reference:string){
    return this.cnssService.findByReference(reference);
}
public findByDatede(datede:Date){
    return this.cnssService.findByDatede(datede);
}
public findByActivite(activite:string){
    return this.cnssService.findByActivite(activite);
}
public deleteByReference(reference:string){
    return this.cnssService.findByReference(reference);
}
public deleteByNumerocnss(numeroCnss:string){
    return this.cnssService.deleteByNumeroCnss(numeroCnss);

}
  ngOnInit(): void {
  }

}
