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

  ngOnInit(): void {
  }

}
