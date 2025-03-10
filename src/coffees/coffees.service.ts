import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffe } from './coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffe[] = [
        {
            id: 1,
            name: 'atta',
            brand: 'human',
            flavors: ['hi', 'day']
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne (id: string) {
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            Object.assign(existingCoffee, updateCoffeeDto);
        }
    } 

    remove (id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);

        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}


