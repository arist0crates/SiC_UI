import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../productItem.models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  item = new ProductItem(1,"Armario","Armario de sala",10,20,30,"madeira","polido",[],2);
  item2 = new ProductItem(2,"Gaveta","Gaveta de sala",10,20,30,"madeira","polido",[],200);
  list = [this.item,this.item2];

  selectedItem: ProductItem;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item:ProductItem): void{
    this.selectedItem = item;
  }

}
