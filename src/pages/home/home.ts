import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController } from 'ionic-angular';
import { MyPopoverPage } from './popover';
import { MyModalPage } from './modal';

@Component({
  selector: 'page-home',
  template: `
  <ion-header>
  <ion-navbar>
    <ion-buttons end>
      <button ion-button icon-only (click)="presentPopover($event)">
        <ion-icon name="more"></ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>

<ion-content padding>
  page -&gt; popover -&gt; modal test.

  <button  (click)="showModal()">open modal page</button>

</ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {

  }

  presentPopover(event): void {
    let popover = this.popoverCtrl.create(MyPopoverPage);
    popover.onDidDismiss(data => {
      console.log(data);
    });
    popover.present({ ev: event });
  }

  public showModal() {
    let modal = this.modalCtrl.create(MyModalPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

}
