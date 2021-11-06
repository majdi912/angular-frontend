// import { Component, OnInit, Input } from '@angular/core';
// import { EquipService } from '../models.service';
// import { Equip } from '../models';
//
// import {EquipsListComponent } from '../equips-list/equips-list.component';
//
// @Component({
//   selector: 'equip-details',
//   templateUrl: './equip-details.component.html',
//   styleUrls: ['./equip-details.component.css']
// })
// // export class EquipDetailsComponent implements OnInit {
//
//   @Input() equip: Equip;
//
//   constructor(private equipService: EquipService, private listComponent: EquipsListComponent) { }
//
//   ngOnInit() {
//   }
//
//   updateActive(isActive: boolean) {
//     this.equipService.updateEquip(this.equip.id,
//       { name: this.equip.nom, age: this.equip.nbre_port, active: isActive })
//       .subscribe(
//         data => {
//           console.log(data);
//           this.equip = data as Equip;
//         },
//         error => console.log(error));
//   }
//
//   deleteEquip() {
//     this.equipService.deleteEquip(this.equip.id)
//       .subscribe(
//         data => {
//           console.log(data);
//           this.listComponent.reloadData();
//         },
//         error => console.log(error));
//   }
//
// }
