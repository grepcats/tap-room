import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { Under10Pipe } from './under10.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    ListKegComponent,
    NewKegComponent,
    Under10Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
