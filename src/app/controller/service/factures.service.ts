import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Factures} from "../model/factures.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  public _factures:Factures;
  public _listfactures: Array<Factures>;
  private url="http://localhost:8036/Fidmanar/Facture";
  public save(): void {
    console.log(this._factures);
    this.http.post(this.url+"/",this._factures).subscribe(
      data=>{
        this._listfactures.push(this.factures);
      },error=>{
        console.log("errore"+error);
      }
    )

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
  public deleteByReference (reference:number, index : number){
    this.http.delete<number>(this.url+"/reference/"+reference).subscribe(
      data=>{
        if (data > 0 ){
          this.listfactures.splice(index, 1);
        }
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

  public findAll(){
    this.http.get<Array<Factures>>(this.url+"/").subscribe(
      data=>{
        this._listfactures = data ;
      }, error => {
        console.log("error");
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
  update(index: number): void{
    this._factures = this.listfactures[index]
  }
  constructor(private http:HttpClient) { }
}
