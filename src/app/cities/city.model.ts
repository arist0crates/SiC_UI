import { Location } from "../locations/location.model";

export class City {
    public name: string;
    public location: Location;
  
    constructor(name: string, location: Location) {
      this.name = name;
      this.location = location;
        
    }
  }
  