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
  shownGroup: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public detailClass: detailClass) {
  }
  ngOnInit() {
    this.data = this.detailClass.getter().documents;
    console.log(this.data);

    for (let i=0; i<10; i++) {
      this.groups[i] = {
        name: i,
        items: []
      };
      for (var j=0; j<3; j++) {
        this.groups[i].items.push(i + '-' + j);
      }
    }
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
