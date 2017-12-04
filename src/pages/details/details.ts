import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  pushMessage: string = 'push message will be displayed here';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if (navParams.data.message) {
      this.pushMessage = navParams.data.message;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
