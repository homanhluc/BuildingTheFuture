import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Element } from '@angular/compiler';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular/platform/platform';
import { Label } from 'ionic-angular/components/label/label';

declare var google: any;
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapRef: ElementRef;
  locationname;
  inputLocation: any;
  Lat: any;
  Long: any;
  LatLg: any;
  map: any;
  a: any;
  places: Array<any>;
  locate: any;
  location: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation, private platform: Platform) {

  }

  ngOnInit() {
    this.locationname = this.navParams.get('location');
    this.inputLocation = this.navParams.get('inputLocation');
    console.log(this.inputLocation);
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.Lat = resp.coords.latitude;
        this.Long = resp.coords.longitude;
        
        this.DisplayMap();
        
        
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
  }

  DisplayMap() {
    //Setup a location
    const myLocation = new google.maps.LatLng(this.Lat, this.Long);//11.051924, 106.668233
    this.location = myLocation;
    //Map option
    console.log(myLocation);
    const options = {
      center: myLocation,
      zoom: 12,
      mapTypeId: 'hybrid',
    }
    
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(myLocation, this.map);
    // this.addMarker('11.051924, 106.668233', this.map);
    //Show Place Nearby
    console.error(myLocation);
    this.getPosition(myLocation);
    

  }

  createMarker(place) {
    this.locate = new google.maps.LatLng(place.geometry.viewport.b.b, place.geometry.viewport.f.f);
    this.addMarker(this.locate, this.map);
    
  }

  addMarker(location, maps) {
    return new google.maps.Marker({
      position: location,
      map: maps,
    });
  }

  
  marker: any;
  getPosition(place) {
    var service = new google.maps.places.PlacesService(this.map);
    var request = {
      location: place,
      radius: 8000,
      name: this.locationname
    };
    
    
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK){
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);
            // this.createMarker(place);
            this.locate = new google.maps.LatLng(place.geometry.viewport.f.f, place.geometry.viewport.b.b);
            this.addMarker(this.locate, this.map);
          }
        }
      });

  }
}
