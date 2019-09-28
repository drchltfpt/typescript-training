class Vehicle {
    name: string;
    brand: string;
    constructor (name: string, brand: string) {
        this.name = name;
        this.brand = brand;
    }

    info() {
        return console.log('Name: ' + this.name + ', brand: ' + this.brand);
    }

    start() {
        return console.log(this.brand + ' ' + this.name + ' is running!!!');
    }
}

let bugati = new Vehicle('Veyon', 'Bugati');
bugati.info();
bugati.start();