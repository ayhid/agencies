import { Controller, Get } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { Agency } from './interfaces/agency.interface';

@Controller('agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Get()
  async findAll(): Promise<Agency[]> {
    return this.agenciesService.findAll();
  }
}
