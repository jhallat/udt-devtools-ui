import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Folder} from './group/folder';
import {Configuration} from './models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private configuration: Configuration = {
    uiRootFolder: '',
    serviceRootFolder: ''
  };

  private getConfiguration = new BehaviorSubject<Configuration>(this.configuration);
  getConfiguration$ = this.getConfiguration.asObservable();

  constructor() {}

  setUIRootFolder(folder: string): void {
    this.configuration = {...this.configuration, uiRootFolder: folder};
    this.getConfiguration.next(this.configuration);
  }

  setServiceRootFolder(folder: string): void {
    this.configuration = {...this.configuration, serviceRootFolder: folder};
    this.getConfiguration.next(this.configuration);
  }
}
