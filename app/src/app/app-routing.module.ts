import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { EquipsListComponent } from './equips-list/equips-list.component';
// import { CreateEquipComponent } from './create-equip/create-equip.component';
// import { SearchEquipsComponent } from './search-equips/search-equips.component';

const routes: Routes = [
    { path: '', redirectTo: 'equips', pathMatch: 'full' },
     { path: 'equips', component: EquipsListComponent },
    // { path: 'add', component: CreateEquipComponent },
    // { path: 'findbynbre_port', component: SearchEquipsComponent },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
