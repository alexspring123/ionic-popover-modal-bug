import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MyPopoverPage } from './popover';

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
</ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController, ) {

  }

  presentPopover(event): void {
    let popover = this.popoverCtrl.create(MyPopoverPage);
    popover.onDidDismiss(data => {
      console.log(data);
    });
    popover.present({ ev: event });
  }

}
