import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styles: [
    `
      .auth-icon {
        transform: scale(1.2);
        margin: -0.2em 0.9em 0em 0.4em;
        cursor: pointer;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AuthNavComponent {
  profileJson: string = '';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
