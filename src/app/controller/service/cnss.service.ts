import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Cnss} from "../model/cnss.model";

@Injectable({
  providedIn: 'root'
})

export class CnssService {
  public _cnss:Cnss| undefined;
  public _listcnss: Array<Cnss>| undefined;

  public save(): void {
    //this._listcnss.push(this.cnss);

  }

  get cnss(): Cnss {
    if (this._cnss == null){
      this._cnss = new Cnss();
    }
    return this._cnss;
  }

  get listcnss(): Array<Cnss> {
    if (this._listcnss == null){
      this._listcnss = new Array<Cnss>();
    }
    return this._listcnss;
  }

  constructor() { }
}
