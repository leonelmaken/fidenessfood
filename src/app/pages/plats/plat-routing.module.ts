import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenupageComponent } from './plats-details/menupage/menupage.component';
import { MenuComponent } from './plats-details/menupage/menu/menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'plats:/id',component:MenupageComponent
      },
      {
        path:'plats',component:MenuComponent
      },
    ]),
  ],
  exports:[RouterModule]
})
export class PlatRoutingModule { }
