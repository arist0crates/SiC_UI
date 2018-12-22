import { Product } from "../products/product.model";

export class Catalog {
    public CatalogId: number;
    public name: string;
    public products: Product[];
  
    constructor(CatalogId: number, name: string, products: Product[]) {
      this.CatalogId = CatalogId;
      this.name = name;
      this.products = products;
        
    }
  }
  