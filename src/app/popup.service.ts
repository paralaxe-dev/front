import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private showPopupSubject = new Subject<boolean>();
  showPopup$ = this.showPopupSubject.asObservable();

  constructor() { }

  openPopup() {
    console.log('entrou no serviço')
    this.showPopupSubject.next(true);
  }

  closePopup() {
    this.showPopupSubject.next(false);
  }
}
