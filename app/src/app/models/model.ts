import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
 export class Equip{
    id: number;
    nom: string;
    ip_add: string;
    mac_add: string;
    etat: string;
    aeroport: string;
    switch: string;
    num_port: string;
    nbre_port: number;
}
