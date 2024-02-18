import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private showPopupSubject = new Subject<boolean>();
  private inputValueSubject = new Subject<number>();

  showPopup$ = this.showPopupSubject.asObservable();
  inputValue$ = this.inputValueSubject.asObservable();

  constructor() { }

  openPopup() {
    this.showPopupSubject.next(true);
  }

  closePopup() {
    this.showPopupSubject.next(false);
  }

  setInputValue(value: number) {
    this.inputValueSubject.next(value);
  }
}
