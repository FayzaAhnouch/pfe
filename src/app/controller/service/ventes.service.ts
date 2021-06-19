import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Ventes} from "../model/ventes.model";
import {HttpClient} from "@angular/common/http";
import { Personnels } from '../model/personnels.model';

@Injectable({
  providedIn: 'root'
})
export class VentesService {
  public _ventes:Ventes;
  public _listventes: Array<Ventes>;
  private url="http://localhost:8036/Fidmanar/Vente";


  public save(): void {
    this.http.post(this.url+"/",this._ventes).subscribe(
      data=>{
        this._listventes.push(this.ventes);
      },error=>{
        console.log("errore"+error);
      }
    )

  }
  public findByDate(date:Date){
    this.http.get<Ventes>(this.url+"/date/"+date).subscribe(
      data=>{
        console.log (data);
      },error=>{
           console.log("erreur"+error);
      }
    )
  }
  public findByReference(reference:string){
    this.http.get<Ventes>(this.url+"/reference/"+reference).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("erreur"+error);
  }
    )
  }
  public findByMontant(montant:string){
    this.http.get<Ventes>(this.url+"/montant/"+montant).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("erreur"+error);
  }
    )
 }
 public deleteByReference(reference:number, i: number){
  this.http.delete<number>(this.url+"/reference/"+reference).subscribe(
    data=>{
           if (data > 0){
             this._listventes.splice(i,1);
           }
    },error=>{
      console.log("erreur"+error);
    }
  )
   }
   public  deleteByDate(date: Date){
    this.http.delete<Ventes>(this.url+"/date/"+date).subscribe(
      data=>{
        this._ventes=data;
        console.log(data);
      },error=>{
        console.log("erreur"+error);
      }
    )
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
  constructor(private http:HttpClient) { }

  update(index: number) {
    this._ventes = this._listventes[index];
  }

  findAll() {
    this.http.get<Array<Ventes>>(this.url+ "/").subscribe(
      data=>{
        this._listventes = data ;
      }, error => {
        console.log("eror");
      }
    )
  }
}
