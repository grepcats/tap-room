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
  @Input() editFormView: boolean;
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  @Output() clickSort = new EventEmitter();
  //@Output() editFormClicked = new EventEmitter();

  constructor() { }

  editButtonClicked(kegToEdit: Keg) {
    this.editFormView = true;
    //this.editFormClicked.emit(this.editFormView);
    this.clickSender.emit(kegToEdit);
  }

  saleButtonClicked(kegToModify: Keg) {
    this.saleSender.emit(kegToModify);
  }

  sortButtonClicked(by: string) {
    this.clickSort.emit(by);
  }

  returnPercentage(kegToCalculate: Keg) {
    return (kegToCalculate.pints / 124 * 100) + "%";
  }


}
