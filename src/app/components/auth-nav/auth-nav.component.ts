import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styles: [
    `
      mat-icon {
        transform: scale(1.4);
        margin: -0.2em 0.9em 0em 0.4em;
        cursor: pointer;
      }
      .tooltip-login-logout {
        font-size: 1.1em;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AuthNavComponent implements OnInit {
  profileJson: string = '';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    // this.auth.user$.subscribe((profile) => {
    //   this.profileJson = JSON.stringify(profile, null, 2);
    //   console.log('dsds', this.profileJson);
    // });
    // this.auth.idTokenClaims$.subscribe((claims) => {
    //   // console.log(claims)
    //   const rawToken = claims?.__raw;
    //   console.log(rawToken);
    // });
  }
}
