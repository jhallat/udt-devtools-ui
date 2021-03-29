import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from './shared/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UDT Development Tools';
  rootUIFolder = 'undefined';
  rootServiceFolder = 'undefined';

  constructor(private router: Router, private stateService: StateService) {
  }


  onSearchFolder(type: string): void {
    this.router.navigate(['/foldersearch', type]);
  }

  ngOnInit(): void {
    this.stateService.selectedFolderChanged$.subscribe({
      next: value => {
        if (value.type === 'ui') {
          this.rootUIFolder = value.path;
        }
        if (value.type === 'service') {
          this.rootServiceFolder = value.path;
        }
      }
      }

    );
  }



}
