import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found!`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, createCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    console.log(createCoffeeDto);
    if (existingCoffee) {
      //some logic
    }
  }

  remove(id: string) {
    const coffeeIdnex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIdnex >= 0) {
      this.coffees.splice(coffeeIdnex, 1);
    }
  }
}