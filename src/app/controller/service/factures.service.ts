import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Factures} from "../model/factures.model";

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  public _factures:Factures| undefined;
  public _listfactures: Array<Factures>| undefined;

  public save(): void {
    //this._listfactures.push(this.factures);

  }

  get factures(): Factures {
    if (this._factures == null){
      this._factures = new Factures();
    }
    return this._factures;
  }

  get listfactures(): Array<Factures> {
    if (this._listfactures == null){
      this._listfactures = new Array<Factures>();
    }
    return this._listfactures;
  }

  constructor() { }
}
