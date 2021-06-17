import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Personnels} from "../model/personnels.model";

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {
  public _personnels:Personnels| undefined;
  public _listpersonnels: Array<Personnels>| undefined;

  public save(): void {
    //this._listpersonnels.push(this.personnels);

  }

  get personnels(): Personnels {
    if (this._personnels == null){
      this._personnels = new Personnels();
    }
    return this._personnels;
  }

  get listpersonnels(): Array<Personnels> {
    if (this._listpersonnels == null){
      this._listpersonnels = new Array<Personnels>();
    }
    return this._listpersonnels;
  }

  constructor() { }
}
