import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();
  @Output() cancelSender = new EventEmitter();
  //@Output() cancelSender = new EventEmitter();
  @Input() cancelBool: boolean;

  submitForm(name: string, brand: string, price: string, alcoholContent: string) {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseFloat(alcoholContent));
    this.sendKeg.emit(newKeg);
  }

  clickedCancel() {
    this.cancelBool = true;
    this.cancelSender.emit(this.cancelBool);
  }

}
