import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from '../shopping-list.service';
import { Product } from 'src/app/products/product.model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Product;
  finalProduct: Product;
  heightSliderVal: number;
  depthSliderVal: number;
  widthSliderVal: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getProduct(index);
          this.finalProduct = this.slService.getProduct(index);
          this.heightSliderVal =this.editedItem.dimensions.minHeight;
          this.depthSliderVal =this.editedItem.dimensions.minDepth;
          this.widthSliderVal =this.editedItem.dimensions.minWidth;
          this.slForm.setValue({
            name: this.editedItem.name,
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    this.editedItem.dimensions.minHeight= this.heightSliderVal;
    this.editedItem.dimensions.minDepth= this.depthSliderVal;
    this.editedItem.dimensions.minWidth= this.widthSliderVal;
    const value = form.value;
    console.log("NAME:"+ value.name);
    const newProduct = new Product(value.name, this.editedItem.productId, this.editedItem.possibleMaterialFinishes, this.editedItem.products, this.editedItem.dimensions, this.editedItem.category);
    console.log(newProduct.name);
    if (this.editMode) {
      this.slService.updateProduct(this.editedItemIndex, newProduct);
    } else {
      this.slService.addProduct(newProduct);
    }
    this.editMode = false;
    form.reset();
    this.widthSliderVal = 0;

    this.ngOnInit();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.ngOnInit();
  }

  onDelete() {
    this.slService.deleteProduct(this.editedItemIndex);
    this.onClear();
  }

  onDeleteSubProduct(index: number) {
    this.finalProduct.products.splice(index, 1);
  }

  onHeightSliderChange(val) {
    this.heightSliderVal = val;

  }
  onDepthSliderChange(val) {
    this.depthSliderVal = val;

  }
  onWidthSliderChange(val) {
    this.widthSliderVal = val;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
