import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'http://localhost:3000/foods';

  constructor(private http: HttpClient) { }

  addFood(food: any): Observable<any> {
    return this.http.post(this.apiUrl, food);
  }

  getFoods(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
