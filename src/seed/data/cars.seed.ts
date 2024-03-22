import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";
export const CARS_SEED: Car[] = [
    {
        id:uuid(),
        brand: "Toyota",
        model: "Corolla"
    },
    {
        id:uuid(),
        brand: "Tesla",
        model: "X"
    },
    {
        id:uuid(),
        brand: "Ford",
        model: "Hilux"
    },
    {
        id:uuid(),
        brand: "Jeep",
        model: "Cherokee"
    },
] 