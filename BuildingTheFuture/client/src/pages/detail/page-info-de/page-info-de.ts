import { MapsPage } from './../../maps/maps';
import { detailClass } from './../detailClass';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageInfoDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-info-de',
  templateUrl: 'page-info-de.html',
})
export class PageInfoDePage {

  data: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public detailClass: detailClass) {
  }
  ngOnInit() {
    this.data = this.detailClass.getter().infodetail;
    console.log(this.data);
  }
  mapView(name){
    this.navCtrl.push(MapsPage, {
      location: name
    });
  }
}
