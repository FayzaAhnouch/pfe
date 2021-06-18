import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Personnels} from "../model/personnels.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {
  public _personnels:Personnels| undefined;
  public _listpersonnels: Array<Personnels>| undefined;
  private url="http://localhost:8036/fidmanar/Personnels";
 

  public save(): void {
    this.http.post(this.url+ "/",this._personnels).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
    //this._listpersonnels.push(this.personnels);
  }
  public findByDatedembauche(date_d_embauche:Date){
    this.http.get<Personnels>(this.url+"/date_d_embauche/"+date_d_embauche).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public findBydatederetraite(date_de_retraite:Date){
    this.http.get<Personnels>(this.url+"/date_de_retraite/"+date_de_retraite).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public findBySalairedebase(salairedebase: string){
    this.http.get<Personnels>(this.url+"/salairedebase/"+salairedebase).subscribe(
     data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
  public deleteByDatedembauche (date_d_embauche:Date){
    this.http.delete<Personnels>(this.url+"/date_d_embauche/"+date_d_embauche).subscribe(
      data=>{
        this._personnels=data;
        console.log(data);
      },error=>{
        console.log("erreur"+error);
      }
    )
     }
     public deleteBySalairedebase (salairedebase:string){
      this.http.delete<Personnels>(this.url+"/salairedebase/"+salairedebase).subscribe(
        data=>{
          this._personnels=data;
          console.log(data);
        },error=>{
          console.log("erreur"+error);
        }
      )
       }



  get personnels(): Personnels {
    if (this._personnels == null){
      this._personnels = new Personnels();
    }
    return this._personnels;
  }

  get listpersonnels(): Array<Personnels> {
    if (this._listpersonnels == null){
      this._listpersonnels = new Array<Personnels>();
    }
    return this._listpersonnels;
  }


  constructor(private http:HttpClient) { }
}
