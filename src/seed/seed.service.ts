import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor (
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ){}

  populateDB (){

    // CARS_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED)

    return 'seed succesfully';
  }

}
