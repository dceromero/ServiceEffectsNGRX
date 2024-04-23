import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http:HttpClient = inject(HttpClient);
  private url = 'https://reqres.in/api';

  public getUsersAll() {
    return this.http.get<UsuarioModel[]>(`${this.url}/users?per_page=12&delay=5`)
    .pipe(
      map((resp:any)=>resp['data'])
    );
  }

  public getUsersOne(id:string) {
    return this.http.get<UsuarioModel>(`${this.url}/users/${id}`).pipe(
      map((resp:any)=>resp['data'])
    );
  }

}
