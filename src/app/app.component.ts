import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rip City Taproom';

  masterKegList: Keg[] = [new Keg("Old World Lager", "Matchless", 5, 4.8), new Keg("Fuzztail", "Sunriver", 4, 5.0), new Keg("Hairy Knuckle", "Sasquatch", 5, 6.9)]

  selectedKeg: Keg = null;
  selectedPintKeg: Keg = null;

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }


  finishedEditing() {
    this.selectedKeg = null;
  }

  deleteKeg() {
      let index = this.masterKegList.indexOf(this.selectedKeg)
      this.masterKegList.splice(index, 1);
      this.selectedKeg = null;
  }

  modifyKegPints(clickedKeg) {
    this.selectedPintKeg = clickedKeg;
    this.selectedPintKeg.pints -= 1;
  }

 }
