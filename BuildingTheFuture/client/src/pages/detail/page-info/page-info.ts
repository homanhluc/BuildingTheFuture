import { ProceduresServiceService } from './../../../service/procedures-service.service';
import { detailClass } from './../detailClass';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the PageInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-info',
  templateUrl: 'page-info.html',
})
export class PageInfoPage {
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  data: any;
  link: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public proceduresService: ProceduresServiceService,
    public detailClass: detailClass,
  public events:Events) {
      
  }
  ngOnInit() {
    this.events.subscribe('link', link => {
      this.link = link;
  });
    if(this.detailClass.getter() !== undefined) {
      this.data = this.detailClass.getter().information;
    } else {
      this.proceduresService.detail(this.link).subscribe(data => {
        this.data = data[0].information;
      });
    }
  }
}
