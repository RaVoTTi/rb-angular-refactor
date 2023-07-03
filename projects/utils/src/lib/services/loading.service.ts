import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoading$ = this.loadingSubject.asObservable();

  show(): void {
    console.log('OPEN');
    this.loadingSubject.next(true);
  }

  close(): void {
    console.log('CLOSE');
    this.loadingSubject.next(false);
  }
}
