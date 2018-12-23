import { City } from "../cities/city.model";

export class DeliveryAddress {
    public city: City;

    constructor(city: City) {
        this.city = city;
    }
}
