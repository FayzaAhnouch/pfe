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


  ngOnInit(): void {
  }

}
