import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'],
})
export class NopagefoudComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigateByUrl('/home');
  }
}
