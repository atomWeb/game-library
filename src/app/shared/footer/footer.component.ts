import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  copyrightYear: string;

  constructor() {
    this.copyrightYear = new Date().getFullYear().toString();
  }

  gotoGithub() {}
}
