import { Product } from "../products/product.model";

export class ProductPrice {
    public ProductPriceId: number;
    public value: number;
    public item: Product;
    public applicableDate : Date;
  
    constructor(ProductPriceId: number, value: number, item: Product, applicableDate : Date) {
      this.ProductPriceId = ProductPriceId;
      this.value = value;
      this.item = item;
      this.applicableDate = applicableDate;
        
    }
  }
  