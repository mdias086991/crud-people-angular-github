import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User{
  id: number;
  nome: string;
  endereco: string;
  cep: number;
  email: string;
  cidade: string;
  telefone: string;
  sobrenome: string;
  usuario_github: string;
  status: string;
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public host: string = "http://localhost:3000/user";

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.host)
  }

  public deleteUser(user_id: number): Observable<User> {
    return this.http.delete<User>(`${this.host}/${user_id}`);
  }

  public saveUser(data: User): Observable<User> {
    return this.http.post<User>(this.host, data);
  }
  

}
