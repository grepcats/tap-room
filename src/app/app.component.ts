import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rip City Taproom';

  masterKegList: Keg[] = [new Keg("Old World Lager", "Matchless", 5, 4.8), new Keg("Fuzztail", "Sunriver", 4, 5.0), new Keg("Hairy Knuckle", "Sasquatch", 5, 6.9), new Keg("Mosaic Pale", "Backwoods", 3, 4.7), new Keg("Hairy Knuckle", "Sasquatch", 5, 6.9), new Keg("Mosaic Pale", "Backwoods", 5, 4.7), new Keg("Eagle, Globe, & Anchor", "Grains of Wrath", 4, 6.9), new Keg("Romantic Chemistry", "Dogfish Head", 7, 7.2), new Keg("Eagle, Globe, & Anchor", "Grains of Wrath", 4, 6.9), new Keg("Mosaic Revenge", "Revision", 8, 9.0)]

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
    if (this.selectedPintKeg.pints > 0 ) {
      this.selectedPintKeg.pints -= 4;
    }
  }

  sort(by: string) {
    switch(by) {
      case 'alcAsc':
        return this.masterKegList.sort(compareAlcohol);
      case 'alcDesc':
        return this.masterKegList.sort(compareAlcohol).reverse();
      case 'priceAsc':
        return this.masterKegList.sort(comparePrice);
      case 'priceDesc':
        return this.masterKegList.sort(comparePrice).reverse();
    }
  }

}

function compareAlcohol(a,b) {
 if (a.alcoholContent < b.alcoholContent)
   return -1;
 if (a.alcoholContent > b.alcoholContent)
   return 1;
 return 0;
}

function comparePrice(a,b) {
 if (a.price < b.price)
   return -1;
 if (a.price > b.price)
   return 1;
 return 0;
}
