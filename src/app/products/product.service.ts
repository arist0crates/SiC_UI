import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { asTextData } from '@angular/core/src/view';

@Injectable()
export class ProductService {
  //recipesChanged = new Subject<Recipe[]>();

  private products: Product[] = [];

  constructor(/*private slService: ShoppingListService,*/ public http: HttpClient) {}

  /*setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }*/

  getProducts() {

    return this
      .http
      .get('https://localhost:5001/api/Product')
      .toPromise()
      .then(res => <Product[]>res)
      .then(data => {return data; });
  }

  getProduct(index: number) {
    return this
      .http
      .get('https://localhost:5001/api/Product/'+ index)
      .toPromise()
      .then(res => <Product>res)
      .then(data => {return data; });
  }

  /*addProductToShoppingList(product: Product) {
    this.slService.addProduct(product);
  }*/

  /*addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }*/

  /*updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }*/

  /*deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }*/
}
