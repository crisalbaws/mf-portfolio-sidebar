import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [MatMenuModule, CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule],
})
export class SidebarComponent {
  openedSideBar: boolean = false;
  constructor(private router: Router) { }
  changePassword() {
    this.router.navigate(['/change-password']);
  }
  logout() {
    this.router.navigate(['/login']);
  }
  show(): boolean {
    let isCV = this.router.url.includes('curriculum');
    if (isCV) {
      this.openedSideBar = false;
    }
    return !isCV;
  }
  goToPWA(){
    window.open('https://github.com/crisalbaws');
  }
  getApp(){
    window.open('https://github.com/crisalbaws');
  }
}
