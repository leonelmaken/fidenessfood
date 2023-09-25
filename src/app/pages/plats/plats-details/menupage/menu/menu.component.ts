import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/pages/plats/shared/services/order-details.service';
import { IFood } from '../../../shared/models/menu';
import { FoodListService } from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

 // constructor(private service:OrderDetailsService){ }
  foodData: any;
  public receiveRating : string | undefined;

  public errMsg : string | undefined;

  public filterFoods : IFood[] = [];
  private _platFilter = 'Foods';


  constructor(private platListService: FoodListService){

  }

  ngOnInit(): void {
      this.platListService.getFoods().subscribe({
        next:plats => {
          this.plats = plats;
          this.filterFoods = this.plats;
        },
        error: err =>this.errMsg = err
      });

      this.platFilter = '';
  }
  public title = 'Liste plats';

  public plats:any[] = [
       {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodCalorie:50,
      foodImg:"assets/img/pic1.png",
      rating:3.5
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodCalorie:369,
      foodImg:"assets/img/pic2.png",
      rating:4
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodCalorie:149,
      foodImg:"assets/img/pic13.jpg",
      rating:2
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodCalorie:140,
      foodImg:"assets/img/pic14.jpg",
      rating:5
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodCalorie:105,
      foodImg:"assets/img/pic15.jpg",
      rating:1.5
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodCalorie:219,
      foodImg:"assets/img/pic16.jpg",
      rating:5
    }
  ];



  public get platFilter(): string {

    return this._platFilter;
  }

  public set platFilter(filter : string){
    this._platFilter = filter;

    this.filterFoods = this.platFilter ? this.platFilters(this.platFilter) : this.plats;
  }

  public receiveRatingClicked(message : string) : void {

    this.receiveRating = message;
  }

  private platFilters(criteria: string): IFood[] {
      criteria = criteria.toLocaleLowerCase();

      const res = this.plats.filter(
        (plat : IFood) => plat.foodName.toLocaleLowerCase().indexOf(criteria) != -1
      );
      return res;
  }
}
