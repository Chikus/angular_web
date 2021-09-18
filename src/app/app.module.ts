import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
