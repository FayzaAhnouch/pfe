import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../controller/service/clients.service";
import {Clients} from "../controller/model/clients.model";
import {CnssService} from "../controller/service/cnss.service";
import {Cnss} from "../controller/model/cnss.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cnss',
  templateUrl: './cnss.component.html',
  styleUrls: ['./cnss.component.css']
})
export class CnssComponent implements OnInit {

  constructor(public cnssService: CnssService,private modalService: NgbModal) { }
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
public deleteByReference(reference:string,index: number){
    return this.cnssService.deleteByReference(reference, index);
}
public deleteByNumerocnss(numeroCnss:string){
    return this.cnssService.deleteByNumeroCnss(numeroCnss);

}
  ngOnInit(): void {
    this.findAll();
  }
  open(content): void {
    this.modalService.open(content);
  }

  update(i: number) {
    this.cnssService._cnss = this.cnssService.listcnss[i];
  }


  private findAll() {
    this.cnssService.findALl();
  }
}
