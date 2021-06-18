import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Factures} from "../model/factures.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  public _factures:Factures| undefined;
  public _listfactures: Array<Factures>| undefined;
  private url="http://localhost:8036/fidmanar/Factures";
  public save(): void {
    this.http.post(this.url+"/",this._factures).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
    //this._listfactures.push(this.factures);
  }
  public findByReference(reference: string){
    this.http.get<Factures>(this.url+"/reference/"+reference).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public findByType(type: string){
    this.http.get<Factures>(this.url+"/type/"+type).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public findBydate(date: Date){
    this.http.get<Factures>(this.url+"/date/"+date).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public deleteByReference (reference:string){
    this.http.delete<Factures>(this.url+"/reference/"+reference).subscribe(
      data=>{
        this._factures=data;
        console.log(data);
      },error=>{
        console.log("erreur"+error);
      }
    )
     }
     public deleteByType (type:string){
      this.http.delete<Factures>(this.url+"/type/"+type).subscribe(
        data=>{
          this._factures=data;
          console.log(data);
        },error=>{
          console.log("erreur"+error);
        }
      )
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

  constructor(private http:HttpClient) { }
}
