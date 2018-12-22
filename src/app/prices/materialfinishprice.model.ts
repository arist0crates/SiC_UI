import { MaterialFinish } from "../materialfinishes/materialfinish.model";

export class MaterialFinishPrice {
    public MaterialFinishPriceId: number;
    public value: number;
    public item: MaterialFinish;
    public applicableDate : Date;
  
    constructor(MaterialFinishPriceId: number, value: number, item: MaterialFinish, applicableDate : Date) {
      this.MaterialFinishPriceId = MaterialFinishPriceId;
      this.value = value;
      this.item = item;
      this.applicableDate = applicableDate;
        
    }
  }
  