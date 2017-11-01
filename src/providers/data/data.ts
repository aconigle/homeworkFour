import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
    lists: any = [
        {
            listheader: "Italian",
            Items: [
                {item: "Lasagna"},
                {item: "Spaghetti & Meatballs"},
                {item: "Eggplant Parmigiana"},
                {item: "Bruschetta"},
                {item: "Shrimp Romulus with Lobster Sauce"}
            ]
        },
        {
            listheader: "American",
            Items: [
                {item: "Buffalo Chicken Mac & Cheese"},
                {item: "Mashed Potatoes"},
                {item: "Fried Chicken"},
                {item: "Beef Brisket"},
                {item: "Corn"}
            ]
        },
        {
            listheader: "Chinese",
            Items: [
                {item: "Moo Goo Gai Pan"},
                {item: "General Tso Chicken"},
                {item: "Wonton Soup"},
                {item: "Beef or Shrimp Lo Mein"},
                {item: "Char Siu Pork"}
            ]
        }
    ];

    constructor() {
        // console.log('Hello DataProvider Provider');

    }

}
