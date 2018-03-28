import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css']
})
export class ListKegComponent {

  filterByPints: string = "allKegs";

  @Input() childKegList: Keg[];
  @Input() childSelectedPintKeg: Keg;
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();

  constructor() { }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  saleButtonClicked(kegToModify: Keg) {
    this.saleSender.emit(kegToModify);
  }

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }

  returnPercentage(kegToCalculate: Keg) {
    return (kegToCalculate.pints / 124 * 100) + "%";
  }

}
