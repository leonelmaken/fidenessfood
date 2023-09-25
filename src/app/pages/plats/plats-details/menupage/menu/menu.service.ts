import { Injectable } from "@angular/core";
import { IFood } from "../../../shared/models/menu";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn:'root'
  }
)

export class FoodListService {

  private readonly FOOD_API_URL = 'api/foods.js';

  constructor(private http: HttpClient){

  }

 public getFoods():  Observable<IFood[]> {
    return this.http.get<IFood[]>(this.FOOD_API_URL).pipe();
  }
}
