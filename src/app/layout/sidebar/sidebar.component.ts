import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [MatMenuModule, CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule],
})
export class SidebarComponent {
  openedSideBar: boolean = false;
  isLargeScreen$: Observable<boolean>;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.isLargeScreen$ = this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.Medium])
      .pipe(map(result => {
        return result.matches
      }));
  }
  changePassword() {
    this.router.navigate(['/change-password']);
  }
  logout() {
    this.router.navigate(['/login']);
  }
  isCurriculum() {
    let isCV = this.router.url.includes('/angular/curriculum');
    return isCV;
  }
  goToPWA() {
    window.open('https://crisalbaws.github.io/ticket-todo-managment/#/login');
  }
  getApp() {
    window.open('https://portfolio-caaws-public.s3.us-east-1.amazonaws.com/apps/porfolio/ionicDemo.apk');
  }
}
