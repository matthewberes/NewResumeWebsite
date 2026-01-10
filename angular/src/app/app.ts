import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CanonicalService } from './canonical';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');

  // Set this once to avoid accidental host drift
  private readonly siteOrigin = 'https://matthewberes.com';

  constructor(
    private router: Router,
    private canonical: CanonicalService
  ) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        // Use urlAfterRedirects so Angular’s view of the URL is consistent
        const pathWithQueryAndFragment = e.urlAfterRedirects;

        // Canonical should not include query strings or hash fragments
        const pathOnly = pathWithQueryAndFragment.split('?')[0].split('#')[0];

        // Normalize trailing slash to match GitHub Pages directory canonicalization
        const normalizedPath =
          pathOnly === '/' ? '/' : (pathOnly.endsWith('/') ? pathOnly : `${pathOnly}/`);

        this.canonical.setCanonicalUrl(`${this.siteOrigin}${normalizedPath}`);
      });
  }
}
