import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
