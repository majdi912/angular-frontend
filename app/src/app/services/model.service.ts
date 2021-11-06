import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equip } from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  private endpoint = 'http://localhost:8000/equips/';

  constructor(private http: HttpClient) { }
  //get all equips
  getEquipList(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  //   getEquip(id: number): Observable<object > {
//     return this.http.get(`${this.baseUrl}/${id}`);
//   }
//
//   createEquip(equip: Object): Observable<object> {
//     return this.http.post(`${this.baseUrl}/`, equip);
//   }
//
//   updateEquip(id: number, value: any): Observable<object> {
//     return this.http.put(`${this.baseUrl}/${id}`, value);
//   }
//
//   deleteEquip(id: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`);
//   }
//
//
//   getEquipsBynbre_port(nbre_port: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/${nbre_port}/`);
//   }
//
//   deleteAll(): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/`);
//   }
 }
