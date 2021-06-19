import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Achats} from "../model/achats.model";

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  public _achats: Achats ;
  public _listachats: Array<Achats>;
  public _index: number;
  private url="http://localhost:8036/fidmanar/Achats";

  public save(): void {
    console.log(this.achats);
    this.http.post(this.url+"/",this.clone(this._achats)).subscribe(

      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
    this._listachats.push(this.clone(this._achats));
  }

  public findAll(){
    this.http.get<Array<Achats>>(this.url+"/").subscribe(
      data=>{
        this._listachats=data;
        console.log (data);
      },error=>{
              console.log("kayen errore hna"+error )
      }
    )
  }
   public findByDate(date:Date){
     this.http.get<Achats>(this.url+"/date/"+date).subscribe(
       data=>{
         this._achats=data;
         console.log (data);
       },error=>{
            console.log("erreur"+error);
       }
     )
   }
   public findByMontant(montant:number){
     this.http.get<Achats>(this.url+"/montant/"+montant).subscribe(
       data=>{
         this._achats=data;
         console.log(data);
       },error=>{
         console.log("erreur"+error);
   }
     )
  }
 public findByReference(reference:string){
  this.http.get<Achats>(this.url+"/reference/"+reference).subscribe(
    data=>{
      this._achats=data;
      console.log(data);
    },error=>{
      console.log("erreur"+error);
}
  )
}
 public deleteByReference(reference:string, index: number){
   this.http.delete<number>(this.url+"/reference/"+reference).subscribe(
     data=>{
       if (data > 0){
         this._listachats.splice(index,1);
       }
       console.log(data);
     },error=>{
       console.log("erreur"+error);
     }
   )
    }

  get achats(): Achats {
    if (this._achats == null){
      this._achats = new Achats();
    }
    return this._achats;
  }

  get listachats(): Array<Achats> {
    if (this._listachats == null){
      this._listachats = new Array<Achats>();
    }
    return this._listachats;
  }

  public update(index: number, achat: Achats): void {
    this._index = index;
    this._achats = this.clone(achat);
  }
  constructor(private http:HttpClient) {
  }

  public clone(achat: Achats): Achats {
     const achatclone = new Achats();
     achatclone.date = achat.date;
     achatclone.montant = achat.montant;
     achatclone.reference = achat.reference;
     return achatclone;
  }

}
