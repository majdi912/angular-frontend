import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EquipService } from '../services/model.service';
import { Equip } from '../models/model';

@Component({
  selector: 'app-equips-list',
  templateUrl: './equips-list.component.html',
  styleUrls: ['./equips-list.component.css']
})
export class EquipsListComponent implements OnInit {

  equips: Observable<Equip[]>;

  constructor(private equipService: EquipService) {
  }

  ngOnInit() {
    this.loadEquipsData();
  }
  loadEquipsData(){
    this.equips = this.equipService.getEquipList();
  }
}
//
//   deleteEquips() {
//     this.equipService.deleteAll()
//       .subscribe(
//         data => {
//           console.log(data);
//           this.reloadData();
//         },
//         error => console.log('ERROR: ' + error));
//   }
//
//   reloadData() {
//     this.equips = this.equipService.getEquipList();
//   }
//
// }
