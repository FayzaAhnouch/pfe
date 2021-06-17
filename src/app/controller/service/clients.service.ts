import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Clients} from "../model/clients.model";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public _clients:Clients  | undefined;
  public _listclients: Array<Clients>  | undefined;

  public save(): void {
    this.listclients.push(this.clients);

  }

  get clients(): Clients {
    if (this._clients == null){
      this._clients = new Clients();
    }
    return this._clients;
  }

  get listclients(): Array<Clients> {
    if (this._listclients == null){
      this._listclients = new Array<Clients>();
    }
    return this._listclients;
  }
  constructor() { }
}
