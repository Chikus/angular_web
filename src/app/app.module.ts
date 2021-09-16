import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import {ChildCompo} from './child.component';
import {NataComp} from './nata.component';
import {EmiComp} from './emi.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'emi', component:EmiComp},
  {path:'nata', component:NataComp}
];

@NgModule({
  declarations: [
    AppComponent,ChildCompo,NataComp,EmiComp
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
>>>>>>> 9acacb4 (src files)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
