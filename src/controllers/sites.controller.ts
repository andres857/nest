import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SitesService } from '../services/sites.service';
import { CreateSiteDto, UpdateSiteDto } from '../dtos/sites.dto';

@Controller('sites')
export class SitesController {
  constructor(private sitesService: SitesService) {}
  @Get()
  getsites() {
    const sites = this.sitesService.findAll();
    return {
      message: sites,
    };
  }
  @Get(':id')
  getSitesById(@Param('id', ParseIntPipe) id: number) {
    const site = this.sitesService.findOne(id);
    return {
      message: site,
    };
  }
  @Post()
  addsite(@Body() payload: CreateSiteDto) {
    const newsite = this.sitesService.create(payload);
    return {
      message: newsite,
    };
  }
  @Put(':id')
  updatesite(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSiteDto,
  ) {
    const siteupdated = this.sitesService.update(id, payload);
    return {
      message: siteupdated,
    };
  }
  @Delete(':id')
  deletesite(@Param('id', ParseIntPipe) id: number) {
    const sitedelete = this.sitesService.delete(id);
    return {
      message: sitedelete,
    };
  }
}
