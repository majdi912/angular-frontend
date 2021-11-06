// import { Component, OnInit } from '@angular/core';
//
// import { Equip } from '../models';
// import { EquipService } from '../models.service';
//
// @Component({
//   selector: 'create-equip',
//   templateUrl: './create-equip.component.html',
//   styleUrls: ['./create-equip.component.css']
// })
// export class CreateEquipComponent implements OnInit {
//
//   equip: Equip = new Equip();
//   submitted = false;
//
//   constructor(private equipService: EquipService) { }
//
//   ngOnInit() {
//   }
//
//   newEquip(): void {
//     this.submitted = false;
//     this.equip = new Equip();
//   }
//
//   save() {
//     this.equipService.createEquip(this.equip)
//       .subscribe(
//         data => {
//           console.log(data);
//           this.submitted = true;
//         },
//         error => console.log(error));
//     this.equip = new Equip();
//   }
//
//   onSubmit() {
//     this.save();
//   }
//
// }
