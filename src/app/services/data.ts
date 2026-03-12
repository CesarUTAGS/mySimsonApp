import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private userSource = new BehaviorSubject<string>('Usuario Invitado');
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(name: string) {
    this.userSource.next(name);
  }
}