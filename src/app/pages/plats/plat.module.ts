import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenupageComponent } from './plats-details/menupage/menupage.component';
import { MenuComponent } from './plats-details/menupage/menu/menu.component';
import { PlatRoutingModule } from './plat-routing.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenupageComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    PlatRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlatModule { }
