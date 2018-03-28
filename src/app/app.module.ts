import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    ListKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
