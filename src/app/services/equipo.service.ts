import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url: string=environment.baseUrl;

  //inyecto el cliente http
  constructor(private http: HttpClient) { }

  traerEquipos(){
    return this.http.get(`${this.url}/api/equipos`);
  }

  enviarEquipo(dato:any){
    return this.http.post(`${this.url}/api/equipos`, dato)
  }



 
  
}
