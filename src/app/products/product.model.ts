import { MaterialFinish } from "../materialfinishes/materialfinish.model";
import { Dimension } from "../dimensions/dimension.model";
import { Category } from "../categories/category.model";


export class Product {
  public productId: number;
  public name: string;
  public possibleMaterialFinishes: MaterialFinish[];
  public products: Product[];
  public dimensions: Dimension;
  public category: Category;


  constructor(name: string, productId: number, possibleMaterialFinishes: MaterialFinish[], products: Product[], dimensions: Dimension, category: Category) {
    this.name = name;
    this.productId = productId;
    this.possibleMaterialFinishes = possibleMaterialFinishes;
    this.products = products;
    this.dimensions = dimensions;
    this.category = category;

  }
}
