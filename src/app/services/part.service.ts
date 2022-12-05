import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartModel } from '../models/PartModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http:HttpClient) { }

  getWithStockArea(stockArea:string = ""):Observable<PartModel[]>{
    return this.http.get<PartModel[]>(`${environment.apiUrl}/parts`);
  }
  
}
