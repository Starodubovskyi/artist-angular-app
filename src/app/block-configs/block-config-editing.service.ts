import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlockConfigEditingService {

  configObservable = new BehaviorSubject<any>(null);
  blockRemoveObservable = new BehaviorSubject<any>(null);
  blockSortObservable = new BehaviorSubject<any>(null);

  constructor() { }


  get configWatcher() {
    return this.configObservable.asObservable();
  }

  get blockRemoveWatcher() {
    return this.blockRemoveObservable.asObservable();
  }

  get blockSortWatcher() {
    return this.blockSortObservable.asObservable();
  }
}
