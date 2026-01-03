import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationStart, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnDestroy {
  mobileMenuOpen = false;
  private routerSub: Subscription;

  constructor(private router: Router) {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.mobileMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-links') && !target.closest('.menu-toggle') && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
