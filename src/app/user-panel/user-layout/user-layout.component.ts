import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  itemCount:number = 0;
  intervalObj:any;

  constructor(private router:Router, private authService:AuthenticateService, private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticate) this.router.navigate(['/login']);
    this.intervalObj = setInterval(() => {
      this.getItemCount(); 
    }, 300);
  }

  getItemCount(){
    let shoppingCartItems = this.shoppingCartService.getCartItems();
    this.itemCount = shoppingCartItems.length;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.intervalObj) {
      clearInterval(this.intervalObj);
    }
  }

}
