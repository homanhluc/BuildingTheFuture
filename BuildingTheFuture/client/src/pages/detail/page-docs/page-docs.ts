import { detailClass } from './../detailClass';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageDocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-docs',
  templateUrl: 'page-docs.html',
})
export class PageDocsPage {
  data: any;
  groups = [];
  shownGroup = null;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public detailClass: detailClass) {
  }
  ngOnInit() {
    this.data = this.detailClass.getter().documents;
    console.log(this.data);
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
}
