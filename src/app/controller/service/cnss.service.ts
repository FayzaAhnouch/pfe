import { Injectable } from '@angular/core';
import {Achats} from "../model/achats.model";
import {Cnss} from "../model/cnss.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CnssService {
  public _cnss:Cnss;
  public _listcnss: Array<Cnss>;
  private url="http://localhost:8036/fidmanar/Cnss";


  public save(): void {
      this.http.post<number>(this.url+"/",this._cnss).subscribe(
        data=>{
          if (data > 0){
            this._listcnss.push(this.cnss);
          }
        },error=>{
          console.log("errore"+error);
        }
      )
    //
  }
  public findByNumeroCnss (numeroCnss: string){
    this.http.get<Cnss>(this.url+"/numeroCnss"+numeroCnss).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log("errore"+error);
      }
    )
  }
public findByReference(reference: string){
  this.http.get<Cnss>(this.url+"/reference/"+reference).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.log("errore"+error);
    }
  )
}
public findByDatede(date_de_declaration:Date){
  this.http.get<Cnss>(this.url+"/date-de-declaration/"+date_de_declaration).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.log("errore"+error);
    }
  )
}
public findByActivite(activite: string){
  this.http.get<Cnss>(this.url+"/activite/"+activite).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.log("errore"+error);
    }
  )
}
public deleteByReference (reference:string, index: number){
  this.http.delete<Cnss>(this.url+"/reference/"+reference).subscribe(
    data=>{
      this.listcnss.splice(index,1);
    },error=>{
      console.log("erreur"+error);
    }
  )
   }
   public deleteByNumeroCnss (numeroCnss:string){
    this.http.delete<Cnss>(this.url+"/numeroCnss/"+numeroCnss).subscribe(
      data=>{
        this._cnss=data;
        console.log(data);
      },error=>{
        console.log("erreur"+error);
      }
    )
     }
  get cnss(): Cnss {
    if (this._cnss == null){
      this._cnss = new Cnss();
    }
    return this._cnss;
  }

  get listcnss(): Array<Cnss> {
    if (this._listcnss == null){
      this._listcnss = new Array<Cnss>();
    }
    return this._listcnss;
  }

  constructor(private http:HttpClient) { }

  findALl() {
    this.http.get<Array<Cnss>>(this.url+ "/").subscribe(
      data=>{
        this._listcnss = data;
      }
    )
  }
}
