function vehicle(maker, model){
    this.maker = maker;
    this.model = model;
};

vehicle.prototype.start = function() {
    console.log(`${this.model} has started`)
};

let Toyota = new vehicle("Toyota","Fortuner");
console.log(Toyota.maker, Toyota.model);
Toyota.start();
