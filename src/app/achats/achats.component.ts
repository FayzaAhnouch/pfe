import { Component, OnInit } from '@angular/core';
import {AchatsService} from "../controller/service/achats.service";
import {Achats} from "../controller/model/achats.model";

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  constructor(private _achatsService: AchatsService) { }
  public save(){
    this._achatsService.save();
  }
  get achats(): Achats {
    return this._achatsService.achats;
  }
  get listachats(): Array<Achats>{
    return this._achatsService.listachats;
  }
  ngOnInit(): void {
  }

}
