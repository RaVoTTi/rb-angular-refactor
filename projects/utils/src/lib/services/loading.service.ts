import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoading$ = this.loadingSubject.asObservable();


  showLoading(): void {
    this.loadingSubject.next(true);
  }

  hideLoading(): void {
    this.loadingSubject.next(false);
  }
}
