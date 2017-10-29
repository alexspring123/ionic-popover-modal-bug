import { Component } from '@angular/core';
import { ViewController, ModalController } from "ionic-angular";

@Component({
    selector: 'my-modal',
    template: `
    <ion-content padding>
    this is Modal page.
    <ion-list>
        <ion-item>
        <ion-label fixed>input</ion-label>
        <ion-input type="text" value=""></ion-input>
    </ion-item>
      <button ion-item (click)="colse()">close</button>
    </ion-list>
    </ion-content>
  `
})
export class MyModalPage {

    constructor(public viewCtrl: ViewController,
        public modalCtrl: ModalController) {
    }

    colse() {
        this.viewCtrl.dismiss();
    }

}