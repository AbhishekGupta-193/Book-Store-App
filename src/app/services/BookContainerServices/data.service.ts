import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject=new BehaviorSubject<any>('');
  currentMessage=this.subject.asObservable();
  constructor() { }
  sendData(data:any){
    console.log(data);
    this.subject.next(data);
  }
}
