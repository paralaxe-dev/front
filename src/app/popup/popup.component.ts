import { Component } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  inputValue: string = '';

  constructor(public popupService: PopupService) {}

  closePopup() {
    this.popupService.closePopup();
  }

  submitValue() {
    console.log('Valor inserido:', this.inputValue);
    this.closePopup();
  }
}

