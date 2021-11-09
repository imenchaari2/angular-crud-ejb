import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Compte} from "../models/Compte";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private apiUrl = `http://127.0.0.1:8080/BanqueWeb/api/CompteController`;
  constructor(private http: HttpClient) { }
  public getCompteByRib(rib: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/find/${rib}`);
  }

  public getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiUrl}/comptes`);
  }
  public addCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(`${this.apiUrl}/add`, compte);
  }
  public updateCompte(compte : Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiUrl}/update`, compte);
  }
  public deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }



}
