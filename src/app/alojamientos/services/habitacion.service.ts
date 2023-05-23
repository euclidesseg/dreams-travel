import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Habitacion } from '../interfaces/habitacion.model';

@Injectable()
export class HabitacionService {

  private baseUrl:string = environments.baseUrl;
  constructor(private http: HttpClient) { }


  // obtenemos las havitaciones
  getHabitaciones():Observable<Habitacion[]>{
    return this.http.get<Habitacion[]>(`${this.baseUrl}/buscarhabitaciones`)
  }
}
