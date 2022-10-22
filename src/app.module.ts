import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandsController } from './controllers/brands.controller';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';
import { CategoryService } from './services/category.service';
import { BrandsService } from './services/brands.service';
import { SitesController } from './controllers/sites.controller';
import { SitesService } from './services/sites.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    OrdersController,
    CustomersController,
    BrandsController,
    SitesController,
  ],
  providers: [AppService, ProductsService, UsersService, CustomersService, CategoryService, BrandsService, SitesService],
})
export class AppModule {}
