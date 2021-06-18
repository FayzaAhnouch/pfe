import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Achats} from "../model/achats.model";

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  public _achats:Achats | undefined;
  public _listachats: Array<Achats>| undefined;
  private url="http://localhost:8036/fidmanar/Achats";

  public save(): void {
    this.http.post(this.url+"/",this._achats).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
    //this._listachats.push(this._achats);
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
 public deleteByReference(reference:string){
   this.http.delete<Achats>(this.url+"/reference/"+reference).subscribe(
     data=>{
       this._achats=data;
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
    return this.listachats;
  }
  constructor(private http:HttpClient) {
  }

}
