import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from "../models/Client";



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = `http://127.0.0.1:8080/BanqueWeb/api/ClientController`;

  constructor(private http: HttpClient) { }


  public getClientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/find/${id}`);
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }


  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/add`, client);
  }
  public updateClient(client : Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/update`, client);
  }
  public deleteClient(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }



}
