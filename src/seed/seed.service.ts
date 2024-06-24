import { Injectable } from '@nestjs/common';
import { BrandsSeed, CarsSeed } from './data';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsServide: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  runSeed() {
    this.carsServide.fillCarsWithSeedData(CarsSeed);
    this.brandsService.fillBrandsWithSeedData(BrandsSeed);

    return 'Seed ran successfully!';
  }
}
