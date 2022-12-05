import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingDepartmentModel } from '../models/ShoppingDepartmentModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDepartmentService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ShoppingDepartmentModel[]>{
    return this.http.get<ShoppingDepartmentModel[]>(`${environment.apiUrl}/ShoppingDepartment`);
  }

  
}
