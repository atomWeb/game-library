import { Component, OnInit } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gameLibrary';
  loading$ = this.loader.loading$;  
  color: ThemePalette = 'primary';

  constructor(public loader: SpinnerService) {}
  ngOnInit() {
    this.loader.hide()
  }
}
