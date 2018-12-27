export class ProductItem {
    public id:number;
    public name:string;
    public category:string;
    public height:number;
    public width:number;
    public depht:number;
    public material:string;
    public finish:string;
    public children: ProductItem[];
    public price:number;

    constructor(id:number,name:string,category:string,height:number,width,depht:number,material:string,finish:string,children:ProductItem[],price:number) { 
        this.id = id;
        this.name = name;
        this.category = category;
        this.height = height;
        this.width = width;
        this.depht = depht;
        this.material = material;
        this.finish = finish;
        this.children = children;
        this.price = price;
    }

}
