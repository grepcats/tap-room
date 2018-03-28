import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css']
})
export class ListKegComponent implements OnInit {

  @Input() childKegList: Keg[];

  constructor() { }

  ngOnInit() {
  }

}
