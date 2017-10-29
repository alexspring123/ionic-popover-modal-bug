import { Component } from '@angular/core';
import { ViewController, ModalController, AlertController, LoadingController, ToastController } from "ionic-angular";
import { MyModalPage } from './modal';

@Component({
    selector: 'my-popover',
    template: `
    <ion-list>
      <button ion-item (click)="showModal()">showModalPage</button>
    </ion-list>
  `
})
export class MyPopoverPage {

    constructor(public viewCtrl: ViewController,
        public modalCtrl: ModalController) {
    }

    close() {
        this.viewCtrl.dismiss();
    }

    public showModal() {
        let modal = this.modalCtrl.create(MyModalPage);
        modal.onDidDismiss(data => {
            console.log(data);
        });
        modal.present();
    }


}