import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  token?: string;
  userProfileName?: string;
  userProfileEmail?: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      this.token = claims?.__raw;
      const authToken: string = this.token || '';
      localStorage.setItem('auth-token', authToken);
    });
    this.auth.user$.subscribe((user) => {
      this.userProfileName = user?.name || '';
      this.userProfileEmail = user?.email || '';
      const userProfileId = user?.sub || '';
      localStorage.setItem('auth-user', userProfileId);
    });
  }

  openDialog(): void {
    // Aqui vamos a meter un User dialog
    // A futuro meteremos tambien un dialog genrico para mostrar errores.
    console.log(localStorage.getItem('auth-user'));
    console.log(this.userProfileEmail);
    console.log(this.userProfileName);
  }
}
