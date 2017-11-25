import { detailClass } from './detailClass';
import { PageInfoPage } from './../detail/page-info/page-info';
import { PageInfoDePage } from './../detail/page-info-de/page-info-de';
import { PageDocsPage } from './../detail/page-docs/page-docs';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ProceduresServiceService } from './../../service/procedures-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  link: any;
  data: any;
  tab1Root = PageInfoPage;
  tab2Root = PageDocsPage;
  tab3Root = PageInfoDePage;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public proceduresService: ProceduresServiceService,
    public detailClass: detailClass,
    public loadingCtrl: LoadingController,
  public events: Events) {
      
  }

  ngOnInit() {
    this.link = this.navParams.get('link');
    this.events.publish('link',{link: this.link});
    this.presentLoading();
  }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: '<h5>Đang tải nội dung...</h5>'
    });
    loading.present();
    this.proceduresService.detail(this.link).subscribe(data => {
      this.data = data;
      
      if(this.data !== null){
        this.detailClass.setter(this.data);
        loading.dismiss();
      }
    });
  }
}
