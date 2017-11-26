import { DetailPage } from './../detail/detail';
import { ProceduresServiceService } from './../../service/procedures-service.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-field',
  templateUrl: 'field.html',
})
export class FieldPage {
  namePage: any;
  data = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proceduresService: ProceduresServiceService,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.namePage = this.navParams.get('query');
    this.presentLoading();
  }
  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: '<h5>Đang tải nội dung...</h5>'
    });
    loading.present();
    this.proceduresService.index().subscribe(data => {
      this.data = data.content.filter(element => {
        // if (element.title === this.namePage) {
        //   this.data.push(element);
        // }
        return (element.title.toLowerCase().indexOf(this.namePage.toLowerCase()) > -1);
      });
      loading.dismiss();
    });
  }
  viewDetail(link) {
      this.navCtrl.push(DetailPage, {
        link: link
      });
  }

}
