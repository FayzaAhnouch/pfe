import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Clients} from "../model/clients.model";
import {HttpClient} from "@angular/common/http";
import { Reference } from '@angular/compiler/src/render3/r3_ast';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  [x: string]: any;
  public _clients:Clients;
  public _listclients: Array<Clients>;
  private url="http://localhost:8036/Fidmanar/Clients";

  public save(): void {
      this.http.post(this.url+"/",this._clients).subscribe(
        data=>{
          this.listclients.push(this.clone(this._clients));
        },error=>{
          console.log("errore"+error);
        }
      )
  }
  public findByReference(reference:string){

    this.http.get<Clients>(this.url+"/reference/"+reference).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("error"+error);
      }
    )
  }
  public findByCode(code:string){
    this.http.get<Clients>(this.url+"/code/"+code).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("error"+error);
      }
    )
  }

  public findAll() {
    this.http.get<Array<Clients>>(this.url + "/").subscribe(
      data=>{
        this._listclients = data;
      },error =>{
        console.log("error");
    }
    )
  }

     public deleteByReference (reference:string, index: number){
      this.http.delete<number>(this.url+"/reference/"+reference).subscribe(
        data=>{
          if (data > 1){
            this.listclients.splice(index, 1);
          }
          console.log(data);
        },error=>{
          console.log("erreur"+error);
        }
      )
       }
       public deleteByCode (code:string){
        this.http.delete<Clients>(this.url+"/code/"+code).subscribe(
          data=>{
            this._achats=data;
            console.log(data);
          },error=>{
            console.log("erreur"+error);
          }
        )
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
  constructor(private http:HttpClient) { }

  public update(index: number, client : Clients): void {
    this._clients = this.listclients[index];
  }
  public clone(client : Clients): Clients{
    const newclient = new Clients();
    newclient.reference = client.reference;
    newclient.date_de_naissance = client.date_de_naissance;
    newclient.profil = client.profil;
    newclient.prenom = client.prenom;
    newclient.nom = client.nom;
    return newclient;
  }
}
