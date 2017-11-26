import { ProceduresServiceService } from './../../service/procedures-service.service';
import { FieldPage } from './../field/field';
import { Component, Renderer, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  header: any;
  main_list: any;
  main_cnt: any;
  main_search: any;
  data: any;
  query;
  myInput;
  constructor(public navCtrl: NavController, 
              public re: Renderer, 
              public el: ElementRef,
              public service: ProceduresServiceService) {
                this.data = this.query;
    
  }
  ngOnInit() {
    // let cnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    // this.header = cnt.getElementsByClassName('bg')[0];
    // this.main_list = cnt.getElementsByClassName('main-list')[0];
    // this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
    // this.main_search = cnt.getElementsByClassName('search')[0];
  }
  search() {
    this.navCtrl.push(FieldPage, {
      query: this.myInput
  });
  }

  // getItems(ev) {
  //   // Reset items back to all of the items

  //   // set val to the value of the ev target
  //   var val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.service.index().subscribe(data => {
  //     this.data = this.data.filter((item) => {
        
  //       // this.re.setElementStyle(this.header, 'visibility', 'hidden');
  //       // this.re.setElementStyle(this.main_cnt, 'visibility', 'hidden');
  //       // this.re.setElementStyle(this.main_list,'visibility', 'visible');
  //       // this.re.setElementStyle(this.main_list,'margin-top', '-70%');
  //       // this.re.setElementStyle(this.main_search,'margin-top', '-65%');
  //       return (item.field.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     });
  //   });
  //   } else {
  //     this.re.setElementStyle(this.main_search,'margin-top', '0%');
  //     this.re.setElementStyle(this.header, 'visibility', 'visible');
  //     this.re.setElementStyle(this.main_cnt, 'visibility', 'visible')
  //     this.re.setElementStyle(this.main_list,'visibility', 'hidden');
  //   }
  // }
  viewList(name) {
    this.navCtrl.push(FieldPage, {
      name: name
  });
  }
}
