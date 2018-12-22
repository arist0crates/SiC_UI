import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    /*console.log("routeeee: "+this.router.url.split('/').pop());
    this.id = parseInt(this.router.url.split('/').pop());
    this.productService.getProduct(this.id)
      .then((product) => {
        this.product = product;
        console.log(this.product);
      });*/
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.productService.getProduct(this.id)
            .then((product) => {
              this.product = product;
              console.log(this.product);
            });
        })

  }

  /*onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }*/

}
