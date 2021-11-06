import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/equips/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllEquips(): Observable<any> {
    return this.http.get(this.baseurl + '',
    {headers: this.httpHeaders});
  }
  getOneEquip(equip): Observable<any> {
    return this.http.get(this.baseurl + '' + equip.id + '/',
    {headers: this.httpHeaders});
  }
  updateEquip(equip): Observable<any> {
    const body = {nom: equip.nom , ip_add: equip.ip_add, mac_add: equip.mac_add, etat: equip.etat, aeroport: equip.aeroport, switch: equip.switch, num_port: equip.num_port, nbre_port: equip.nbre_port };
    return this.http.put(this.baseurl + '' + equip.id + '/', body,
    {headers: this.httpHeaders});
  }
  createEquip(equip): Observable<any> {
    const body = {nom: equip.nom , ip_add: equip.ip_add, mac_add: equip.mac_add, etat: equip.etat, aeroport: equip.aeroport, switch: equip.switch, num_port: equip.num_port, nbre_port: equip.nbre_port };
    return this.http.post(this.baseurl + '', body,
    {headers: this.httpHeaders});
  }
  deleteEquip(id): Observable<any> {
    return this.http.delete(this.baseurl + '' + id + '/',
    {headers: this.httpHeaders});
  }
}
