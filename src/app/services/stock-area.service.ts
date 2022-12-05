import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockAreaModel } from '../models/StockAreaModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockAreaService {

  constructor(private http:HttpClient) { }

  getAll():Observable<StockAreaModel[]>{
    return this.http.get<StockAreaModel[]>(`${environment.apiUrl}/stockAreas`);
  }
}
