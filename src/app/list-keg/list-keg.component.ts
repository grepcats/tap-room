import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css'],
  providers: [KegService]
})
export class ListKegComponent implements OnInit {

  filterByPints: string = "allKegs";
  kegs: Keg[];

  @Input() childKegList: Keg[];
  @Input() childSelectedPintKeg: Keg;
  @Input() editFormView: boolean;
  @Input() newFormView: boolean;
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  @Output() clickSort = new EventEmitter();
  @Output() clickedNew = new EventEmitter();


  constructor(private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }


  editButtonClicked(kegToEdit: Keg) {
    this.editFormView = true;
    this.newFormView = true;
    this.clickSender.emit(kegToEdit);

  }

  newButtonClicked() {
    this.newFormView = true;
    this.clickedNew.emit(this.newFormView);
  }

  saleButtonClicked(kegToModify: Keg) {
    this.saleSender.emit(kegToModify);
  }

  sortButtonClicked(by: string) {
    this.clickSort.emit(by);
  }

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }

  returnPercentage(kegToCalculate: Keg) {
    return (kegToCalculate.pints / 124 * 100) + "%";
  }

}
