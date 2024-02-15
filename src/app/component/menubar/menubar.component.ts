import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  constructor(private router: Router) {}

  openMenu() {
    this.router.navigate(['/menu']);
  }
}
