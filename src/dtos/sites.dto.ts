import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSiteDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly city: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;
}

export class UpdateSiteDto extends PartialType(CreateSiteDto) {}
