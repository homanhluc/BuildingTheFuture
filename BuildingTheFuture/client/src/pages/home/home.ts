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
  list = [
    {
      name: "Hành chính tư pháp - Chứng thực",
      title: "UBND các xã, thị trấn"
    },{
      name: "Bổ trợ tư pháp",
      title:"Trung tâm Dịch vụ Bán đấu giá tài sản tỉnh Bình Dương"
    },
    {
      name: "Lao động, tiền lương, quan hệ lao động (LĐTBXH)",
      title:"Sở Lao động - Thương binh và Xã hội"
    },
    {
      name: "Thuế",
      title:"Đội thuế liên xã – Chi cục Thuế huyện Bàu Bàng"
    },
    {
      name: "Nhà ở và công sở",
      title:"Sở Xây dựng; UBND cấp huyện; đơn vị quản lý vận hành nhà ở"
    },
    {
      name: "Khoa học công nghệ",
      title:"Sở Công thương"
    }
  ];
  constructor(public navCtrl: NavController, 
              public re: Renderer, 
              public el: ElementRef) {
    this.initializeItems();
  }
  ngOnInit() {
    let cnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = cnt.getElementsByClassName('bg')[0];
    this.main_list = cnt.getElementsByClassName('main-list')[0];
    this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
  }
  initializeItems() {
    this.items = this.list;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        this.re.setElementStyle(this.header, 'visibility', 'hidden');
        this.re.setElementStyle(this.main_cnt, 'visibility', 'hidden');
        this.re.setElementStyle(this.main_list,'visibility', 'visible');
        this.re.setElementStyle(this.main_list,'margin-top', '-130%');
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.re.setElementStyle(this.header, 'visibility', 'visible');
      this.re.setElementStyle(this.main_cnt, 'visibility', 'visible');
      this.re.setElementStyle(this.main_list,'margin-top', '0px');
    }
  }
  viewList(name) {
    this.navCtrl.push(FieldPage, {
      name: name
  });
  }
}
