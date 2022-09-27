import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}
  @Get()
  getCustomers(@Query('limit') limit = 10, @Query('offset') offset = 5) {
    const client = this.CustomersService.findAll();
    return {
      client,
    };
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.CustomersService.findOne(id);
    return {
      data: customer,
    };
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    const newClient = this.CustomersService.create(payload);
    return {
      message: 'client created',
      data: newClient,
    };
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    const customerUpdated = this.CustomersService.update(id, payload);
    return {
      message: 'customer updated',
      data: customerUpdated,
    };
  }
  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    const rta = this.CustomersService.delete(id);
    return {
      message: 'User deleted',
      data: rta,
    };
  }
}
