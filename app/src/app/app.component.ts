import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  equips = [{id: ''},{nom: ''},{ip_add: ''},{mac_add: ''},{etat: ''},{aeroport: ''},{switch: ''},{num_port: ''},{nbre_port: ''}];
  selectedEquip;

  constructor(private api: ApiService) {
    this.getEquips();
    this.selectedEquip = {
      id: '',
      nom: '',
      ip_add: '',
      mac_add: '',
      etat: '',
      aeroport: '',
      switch: '',
      num_port: '',
      nbre_port: '',
    };
  }

  getEquips = () => {
    this.api.getAllEquips().subscribe(
      data => {
        this.equips = data
      },
      error => {
        console.log(error);
      }
    )
  }
//   getOneEquip = (equip) => {
//     this.api.getOneEquip(equip.id).subscribe(
//       data => {
//         this.selectedEquip = data;
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }
//   updateEquip = () => {
//     this.api.updateEquip(this.selectedEquip).subscribe(
//       data => {
//         this.getEquips();
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }
//   createEquip = () => {
//     this.api.createEquip(this.selectedEquip).subscribe(
//       data => {
//         this.equips.push(data);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }
//   deleteEquip = () => {
//     this.api.deleteEquip(this.selectedEquip.id).subscribe(
//       data => {
//         this.getEquips();
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
}
