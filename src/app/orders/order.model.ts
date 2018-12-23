import { Product } from "../products/product.model";
import { DeliveryAddress } from "../deliveryAddresses/deliveryaddress.model";

export class Order {
    public orderItems: Product[];
    public state: string;
    public datePlaced: Date;
    public deliveryAddress: DeliveryAddress;

    constructor() { }

}
