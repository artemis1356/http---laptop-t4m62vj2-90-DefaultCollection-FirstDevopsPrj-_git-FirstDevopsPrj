import { Component, OnInit } from '@angular/core';
import { PartModel } from 'src/app/models/PartModel';
import { StockAreaModel } from 'src/app/models/StockAreaModel';
import { PartService } from 'src/app/services/part.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { StockAreaService } from 'src/app/services/stock-area.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private stockAreaService: StockAreaService,
    private partService: PartService,
    private shoppingCartService: ShoppingCartService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}
  

  displayedColumns: string[] = [
    'id',
    'partNumber',
    'averageCost',
    'issueUnitofMeasure',
    'orderQty',
    'quantityAvailable',
    'description',
    'actions',
  ];
  stockAreas: StockAreaModel[] = [];
  parts: PartModel[] = [];
  stockAreaIdSelected: number = 0;

  // MatPaginator Inputs
  length = 0;
  pageSize = 2;
  pageSizeOptions: number[] = [2, 5, 10, 50];

  // MatPaginator Output
  pageEvent: PageEvent;

  searchForm = {} as FormGroup;
  
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      stockAreaId: [''],
      partNumber: [''],
      fromAverageCost: [''],
      toAverageCost: [''],
      issueUnitOfMeasure: [''],
      fromQuantityAvailable:[''],
      toQuantityAvailable:[''],
    });

    this.stockAreaIdSelected = Number(localStorage.getItem('stockareaid')) ?? 0;
    this.partService
      .getWithStockArea(String(this.stockAreaIdSelected))
      .subscribe((result) => {
        this.parts = result.filter(
          (item) => item.stockAreaId == this.stockAreaIdSelected
        );
        //set page size
        this.length = this.parts.length;
      });

    //get stockareas
    this.stockAreaService
      .getAll()
      .subscribe((result) => (this.stockAreas = result));
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  changeStock(stock: any) {
    this.stockAreaIdSelected = stock.value;
    localStorage.setItem('stockareaid', stock.value);
    //get parts
    this.partService.getWithStockArea(stock.value).subscribe((result) => {
      this.parts = result.filter((item) => item.stockAreaId == stock.value);

      //set page size
      this.length = this.parts.length;
    });
  }

  addToCart(item: any) {
    const addResult = this.shoppingCartService.addToCart(item);
    if (addResult) {
      this._snackBar.open(
        `add part number ${item.partNumber} to cart`,
        'close',
        { verticalPosition: 'top' }
      );
    } else {
      this._snackBar.open('part already exists in shopping cart!', 'close', {
        verticalPosition: 'top',
      });
    }
  }

  viewDetails(item: any) {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        dataKey: item,
      },
    });
  }

  searchSubmit(){
    this.partService
    .getWithStockArea(String(this.stockAreaIdSelected))
    .subscribe((result) => {
      this.parts = result.filter(
        (item) => 
        (this.searchForm.get('stockAreaId')?.value == "" || item.stockAreaId == this.searchForm.get('stockAreaId')?.value) &&
        (this.searchForm.get('partNumber')?.value == "" || item.partNumber.includes(this.searchForm.get('partNumber')?.value)) &&
        (this.searchForm.get('fromAverageCost')?.value == "" || Number(item.averageCost) >= Number(this.searchForm.get('fromAverageCost')?.value)) &&
        (this.searchForm.get('toAverageCost')?.value == "" || Number(item.averageCost) >= Number(this.searchForm.get('toAverageCost')?.value)) &&
        (this.searchForm.get('fromQuantityAvailable')?.value == "" || Number(item.quantityAvailable) >= Number(this.searchForm.get('fromQuantityAvailable')?.value)) &&
        (this.searchForm.get('toQuantityAvailable')?.value == "" || Number(item.quantityAvailable) >= Number(this.searchForm.get('toQuantityAvailable')?.value)) &&
        (this.searchForm.get('issueUnitOfMeasure')?.value == "" || item.issueUnitofMeasure.includes(this.searchForm.get('issueUnitOfMeasure')?.value))
      );
      //set page size
      this.length = this.parts.length;
    });
  }
}
