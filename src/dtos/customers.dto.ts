import { IsString, IsPhoneNumber, IsNotEmpty, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: number;
  @IsUrl()
  @IsNotEmpty()
  readonly url: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
