import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FolderSearchService} from './folder-search.service';
import {FolderDef} from './folder';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StateService} from '../shared/state.service';

@Component({
  selector: 'app-folder-search',
  templateUrl: './folder-search.component.html',
  styleUrls: ['./folder-search.component.scss']
})
export class FolderSearchComponent implements OnInit {

  type = '';
  currentFolder = '';
  children: FolderDef[] = [];
  selectedFolder = '';

  get title(): string {
    return 'Root Folder for ' + this.titleCase(this.type);
  }

  constructor(private router: Router, private route: ActivatedRoute, private folderSearchService: FolderSearchService, private stateService: StateService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.type = params.get('type') + '';
      }
    );
    this.folderSearchService.getFolder('').subscribe({
        next: folderDef => {
          this.currentFolder = folderDef.name;
          this.children = folderDef.children.filter(folder => folder.isDirectory && !folder.name.startsWith('.'));
        }
      }
    );
  }

  onOpenFolder(folderName: string): void {
    this.folderSearchService.getFolder(`${this.currentFolder}/${folderName}`).subscribe({
        next: folderDef => {
          this.currentFolder = this.currentFolder + '/' + folderDef.name;
          this.children = folderDef.children.filter(folder => folder.isDirectory && !folder.name.startsWith('.'));
          this.selectedFolder = '';
        }
      }
    );
  }

  onClickSelect(): void {
    //this.stateService.selectFolder( this.type, `${this.currentFolder}/${this.selectedFolder}`);
    this.router.navigate(['/home']);
  }

  onSelectFolder(folderName: string): void {
    this.selectedFolder = folderName;
  }

  isFolderSelected(folderName: string): boolean {
    return folderName === this.selectedFolder;
  }

  private titleCase(value: string): string {
    if (value.length === 0) {
      return '';
    }
    if (value.length === 1) {
      return value.toUpperCase();
    }
    const firstLetter = value.substr(0, 1).toUpperCase();
    const remainder = value.substr(1).toLowerCase();
    return firstLetter + remainder;
}

}
