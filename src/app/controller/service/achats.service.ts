import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Achats} from "../model/achats.model";

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  public _achats:Achats | undefined;
  public _listachats: Array<Achats>| undefined;

  public save(): void {
    //this._listachats.push(this._achats);

  }

  get achats(): Achats {
    if (this._achats == null){
      this._achats = new Achats();
    }
    return this._achats;
  }

  get listachats(): Array<Achats> {
    if (this._listachats == null){
      this._listachats = new Array<Achats>();
    }
    return this.listachats;
  }
  constructor() {
  }

}
