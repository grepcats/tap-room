# Rip City Tap Room

#### _A webapp for tracking keg supply in a hypothetical taproom. Admin can sell pints from the kegs which will update to indicate how many pints are left in each keg. Users may also add/edit/delete kegs, and filter kegs for those having 10 or fewer pints left._

## Live site
The app is deployed to https://tap-room-dea84.firebaseapp.com/

## Specs
* As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent
* As an employee, I want to fill out a form when I tap a new keg to add it to the list.
* As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
* As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
* As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
* As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
* As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.
* As a patron/employee, I want to be able to sort beers based on price, alcohol content, or number of pints left

## Installation
If you'd like to install a version of this yourself rather than using the hosted site, please use the following instructions

* clone repository: git clone https://github.com/grepcats/tap-room
* Set up a firebase account at https://firebase.google.com.
  * Add project
  * Add "api-keys.ts" file to the src/app directory
  * Add the following to that file:
  ```
  export let masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
  ```
  Except use the credentials provided to you by firebase (find by "Add Firebase to your web app" on the firebase console)
* install node. if you are on a mac, use `brew install node`. Otherwise, go to https://nodejs.org/en/download/ and download/install the appropriate installer.
* in the project directory, type
```
npm init
npm install (this installs the packages and dependencies listed in the package.json file)

```
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
No known bugs at this time. 

Please report other bugs by submitting an issue on GitHub.

## Support and Contact Details
If there are any issues or questions, please contact me at kayla.renee at gmail dot com or create an issue in GitHub.

## Technologies Used
JavaScript, Node.js, npm, Bootstrap, Angular 5, Firebase

## License
MIT License

Copyright (c) 2018 Kayla Ondracek and Bryce Frazier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


