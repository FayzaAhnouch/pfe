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
  public _clients:Clients  | undefined;
  public _listclients: Array<Clients>  | undefined;
  private url="http://localhost:8036/Fidmanar/Clients";

  public save(): void {
      this.http.post(this.url+"/",this._clients).subscribe(
        data=>{
          console.log(data);
        },error=>{
          console.log("errore"+error);
        }
      )
  // this.listclients.push(this.clients);
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

     public deleteByReference (reference:string){
      this.http.delete<Clients>(this.url+"/reference/"+reference).subscribe(
        data=>{
          this._achats=data;
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
}
