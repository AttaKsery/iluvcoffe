import { Body, Controller, Delete, Param, Patch, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
        // return `this actions return all coffees. limit #${limit} offset #${offset}`;
    }

    @Get(':id')
    findOne (@Param('id') id:string) {
        return this.coffeesService.findOne(id);
        // return `this action returns #${id} coffee`;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log("createCoffeDto");
        console.log(createCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
        // return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
        // return `this action updated #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.coffeesService.remove(id);
        // return `this action remove #${id} coffee`;
    }

}
