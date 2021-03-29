import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Folder} from './group/folder';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private selectFolderChanged = new Subject<Folder>();
  selectedFolderChanged$ = this.selectFolderChanged.asObservable();

  constructor() { }

  selectFolder(type: string, folder: string): void {
    this.selectFolderChanged.next({ type, path: folder });
  }
}
