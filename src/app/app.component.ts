import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IndexComponent } from "./post/index/index.component";

export interface Routes {
  id: number;
  route: string;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    GoogleMapsModule,
    IndexComponent,
    RouterModule,]
})
export class AppComponent {
  title = 'my-angular-app';
  user: any;
  privateRoutes: Routes[] = [
    { id: 1, route: '/post/index', title: 'Posts' },
    { id: 2, route: '/examples/learn', title: 'Learn angular 17' },
    { id: 3, route: '/examples/manage', title: 'Manage' },
    { id: 4, route: '/examples/material-data', title: 'Material UI' },
  ];

  publicRoutes: Routes[] = [
    { id: 1, route: '/login', title: 'Login' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
    console.log('this.user', this.user)
  }

  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  zoom = 6;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) this.display = event.latLng.toJSON();
  }

  onLogout() {
    console.log('logout');
    localStorage.removeItem('user')
    // setTimeout(() => {
    //   window.location.reload()
    // }, 1000)
    this.router.navigateByUrl('/login')
  }
}
