import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthenticateService) {}
  title = 'OnlineShop';
  isAuthenticate = false;

  ngOnInit(): void {
    this.isAuthenticate = this.authService.isAuthenticate;
  }
}
