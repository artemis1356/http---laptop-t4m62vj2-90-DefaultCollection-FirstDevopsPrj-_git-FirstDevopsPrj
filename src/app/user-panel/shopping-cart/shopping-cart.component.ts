import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingDepartmentModel } from 'src/app/models/ShoppingDepartmentModel';
import { PartModel } from 'src/app/models/PartModel';
import { ShoppingDepartmentService } from 'src/app/services/cost-center.service';
import { PartService } from 'src/app/services/part.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  selectedParts: PartModel[] = [];
  form = {} as FormGroup;
  ShoppingDepartment:ShoppingDepartmentModel[] = [];

  displayedColumns: string[] = [
    'partNumber',
    'averageCost',
    'issueUnitofMeasure',
    'orderQty',
    'quantityAvailable',
    'description',
    'itemCount',
    'actions',
  ];
  constructor(
    private partService: PartService,
    private shoppingCartService: ShoppingCartService,
    private fb: FormBuilder,
    private costCenterService:ShoppingDepartmentService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.getSelectedParts();

    
    this.costCenterService.getAll().subscribe(result => this.ShoppingDepartment = result);
  }

  getSelectedParts(){
    this.selectedParts = this.shoppingCartService.getCartItems();
  }

  removeFromCard(part: any) {
    this.shoppingCartService.removeFromCart(part.id);
    this.getSelectedParts();
  }

  updateItemCount(part:any, count:number){
    
  }

  submit(){

  }
}
