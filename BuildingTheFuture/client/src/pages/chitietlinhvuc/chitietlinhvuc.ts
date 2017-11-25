import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChitietlinhvucPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chitietlinhvuc',
  templateUrl: 'chitietlinhvuc.html',
})
export class ChitietlinhvucPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChitietlinhvucPage');
  }

  ListItems = [//Cái này là item để cho list
    '[TÊN THỦ TỤC TRONG LĨNH VỰC 1]',
    '[TÊN THỦ TỤC TRONG LĨNH VỰC 2]',
  ];

  Items = [
    '[TÓM TẮT THÔNG TIN 1]',
    '[TÓM TẮT THÔNG TIN 2]',
  ]

  itemSelected(item: string) {
    console.log("Selected Item", item);
}
}
