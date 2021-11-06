// import { Component, OnInit } from '@angular/core';
// import { Equip } from '../models';
// import { EquipService } from '../models.service';
//
// @Component({
//   selector: 'search-equips',
//   // templateUrl: './search-equips.component.html',
//   styleUrls: ['./search-equips.component.css']
// })
// export class SearchEquipsComponent implements OnInit {
//
//   nbre_port: number;
//   equips: Equip[];
//
//   constructor(private dataService: EquipService) { }
//
//   ngOnInit() {
//     this.nbre_port = 0;
//   }
//
//   private searchEquips() {
//     this.equips = [];
//     this.dataService.getEquipsBynbre_port(this.nbre_port)
//       .subscribe(equips => this.equips = equips);
//   }
//
//   onSubmit() {
//     this.searchEquips();
//   }
//
// }
