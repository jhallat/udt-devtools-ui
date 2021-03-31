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
  warning = 0;

  constructor(private router: Router, private stateService: StateService) {
  }


  onSearchFolder(type: string): void {
    this.router.navigate(['/foldersearch', type]);
  }

  ngOnInit(): void {
    this.stateService.getConfiguration$.subscribe({
      next: configuration => {
        this.warning = 0;
        if (configuration.uiRootFolder === '') { this.warning++; }
        if (configuration.serviceRootFolder === '') { this.warning++; }
        console.log(this.warning);
      }
    });
  }



}
