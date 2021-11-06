import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { CreateEquipComponent } from './create-equip/create-equip.component';
// import { EquipDetailsComponent } from './equip-details/equip-details.component';
// import { EquipsListComponent } from './equips-list/equips-list.component';
// import { SearchEquipsComponent } from './search-equips/search-equips.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // CreateEquipComponent,
    // EquipDetailsComponent,
    // EquipsListComponent,
    // SearchEquipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
