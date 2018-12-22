import { Product } from "../products/product.model";

export class Collection {
    public CollectionId: number;
    public name: string;
    public products: Product[];
  
    constructor(CollectionId: number, name: string, products: Product[]) {
      this.CollectionId = CollectionId;
      this.name = name;
      this.products = products;
        
    }
  }
  