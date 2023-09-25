import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './sharepage/navebar/navebar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/plats/plats-details/menupage/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { StartRatingComponent } from './sharepage/components/star-rating/star-rating.component';
import { MenupageComponent } from './pages/plats/plats-details/menupage/menupage.component';
import { RouterModule } from '@angular/router';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFoodComponentComponent } from './pages/add-food.component/add-food.component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    StartRatingComponent,
    MenupageComponent,
    LoginComponent,
    UserpageComponent,
    AddFoodComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule ,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent },
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'plats/:id',component:MenupageComponent},
      {path:'plats',component:MenuComponent },
      {path:'login',component:LoginComponent},
      {path:'user',component:UserpageComponent},
      {path:'**',redirectTo:'home',pathMatch: 'full'}
    ]),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
