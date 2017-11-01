import { Component } from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    lists: any;

    constructor(public dataService: DataProvider, public navCtrl: NavController) {
        //dataService can be called any name

    }

    ionViewDidLoad() {
        this.lists = this.dataService.lists;
    }

}