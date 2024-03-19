import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: "Toyota",
            model:"Corolla"
        },
        {
            id: 1,
            brand: "Honda",
            model:"Civic"
        },
        {
            id: 2,
            brand: "Tesla",
            model:"X"
        }
    ]

    findAll() {
        return this.cars;
    }

    findById (id: number){
        const carAvaible = this.cars.find(car => car.id == id)
        if(!carAvaible) throw new NotFoundException(`El id: ${id} no existe`);
        return this.cars[id]
    }
}
