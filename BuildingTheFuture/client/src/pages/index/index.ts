import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  searchQuery: string = '';
  items: string[];

  // constructor() {
  //   this.initializeItems();
  // }

  initializeItems() {
    this.items = [//Cái này để cho khung search
      'Chứng thực hợp đồng đổi nhà ở (ở nông thôn)',
      'Ký kết hợp đồng bán đấu giá tài sản',
      'Bán doanh nghiệp tư nhân',
      'Bán hóa đơn lẻ (Trường hợp hộ, cá nhân  kinh doanh nộp thuế theo phương pháp khoán thuế có văn bản đề nghị mua hoá đơn lẻ )',
      'Bán nhà ở cũ thuộc sở hữu nhà nước',
      'Bản xác nhận nhu cầu nhập khẩu thép (để trực tiếp sản xuất, gia công cơ khí, chế tạo, chỉ áp dụng đối với sản phẩm thép có mã số HS 7224.10.00;7224.90.00 )',
      'Báo cáo công nhận kết quả chuyển đổi cấp trữ lượng và cấp tài nguyên khoáng sản rắn',
      'Báo cáo công tác An toàn, vệ sinh lao động.',
      'Báo cáo thay đổi địa chỉ nơi đặt trụ sở, thay đổi lãnh đạo chủ chốt của hội',
      'Báo cáo tình hình cung cấp dịch vụ viễn thông Internet',
      'Báo cáo tình hình hoạt động cho thuê lại lao động.',
      'Báo cáo tình hình thực hiện giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng.',
      'Báo cáo tổ chức đại hội nhiệm kỳ, Đại hội bất thường của hội',
      'Báo cáo về việc thay đổi người quản lý, người giữ chức danh chủ chốt của doanh nghiệp cho thuê lại lao động',
      'Báo cáo việc thành lập pháp nhân thuộc hội',
  
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ListItems = [//Cái này là item để cho list
    'Chứng thực hợp đồng đổi nhà ở (ở nông thôn)',
    'Ký kết hợp đồng bán đấu giá tài sản',
    'Bán doanh nghiệp tư nhân',
    'Bán hóa đơn lẻ (Trường hợp hộ, cá nhân  kinh doanh nộp thuế theo phương pháp khoán thuế có văn bản đề nghị mua hoá đơn lẻ )',
    'Bán nhà ở cũ thuộc sở hữu nhà nước',
    'Bản xác nhận nhu cầu nhập khẩu thép (để trực tiếp sản xuất, gia công cơ khí, chế tạo, chỉ áp dụng đối với sản phẩm thép có mã số HS 7224.10.00;7224.90.00 )',
    'Báo cáo công nhận kết quả chuyển đổi cấp trữ lượng và cấp tài nguyên khoáng sản rắn',
    'Báo cáo công tác An toàn, vệ sinh lao động.',
    'Báo cáo thay đổi địa chỉ nơi đặt trụ sở, thay đổi lãnh đạo chủ chốt của hội',
    'Báo cáo tình hình cung cấp dịch vụ viễn thông Internet',
    'Báo cáo tình hình hoạt động cho thuê lại lao động.',
    'Báo cáo tình hình thực hiện giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng.',
    'Báo cáo tổ chức đại hội nhiệm kỳ, Đại hội bất thường của hội',
    'Báo cáo về việc thay đổi người quản lý, người giữ chức danh chủ chốt của doanh nghiệp cho thuê lại lao động',
    'Báo cáo việc thành lập pháp nhân thuộc hội',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
}
}
