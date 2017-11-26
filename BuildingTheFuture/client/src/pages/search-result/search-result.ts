import { FieldPage } from './../field/field';
import { ProceduresServiceService } from './../../service/procedures-service.service';
import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  data: any;
  @Input('m') m; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _service: ProceduresServiceService) {
                console.log('data is:' + this.m);
  }

  ionViewDidLoad() {
    console.log(this.m);
    this._service.index().subscribe(data => {
      this.data = data;
    });
  }
  viewList(name) {
    this.navCtrl.push(FieldPage, {
      name: name
  });
  }

}
