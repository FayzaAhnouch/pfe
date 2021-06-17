import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Ventes} from "../model/ventes.model";

@Injectable({
  providedIn: 'root'
})
export class VentesService {
  public _ventes:Ventes| undefined;
  public _listventes: Array<Ventes>| undefined;

  public save(): void {
    //this._listventes.push(this.ventes);

  }

  get ventes(): Ventes {
    if (this._ventes == null){
      this._ventes = new Ventes();
    }
    return this._ventes;
  }

  get listventes(): Array<Ventes> {
    if (this._listventes == null){
      this._listventes = new Array<Ventes>();
    }
    return this._listventes;
  }
  constructor() { }
}
