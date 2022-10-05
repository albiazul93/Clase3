import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {
  private listado: Persona[];
  private API_URL: string = 'https://632e21bbb37236d2ebe696b4.mockapi.io/api/v1/alumnos/';

  constructor(private http: HttpClient) {
    this.listado = [];
  }
  obtenerListado(): Observable<Persona[]> {
    const result = this.http.get<Persona[]>(this.API_URL);
    return result;
  }
  eliminar(persona: Persona): Observable<any> {
    return this.http.delete(this.API_URL + persona.id)
  }
  agregar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.API_URL, persona);
    
  }
}
