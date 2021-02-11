import { Module } from '@nestjs/common';
import { AgenciesController } from './agencies/agencies.controller';
import { AgenciesService } from './agencies/agencies.service';
@Module({
  imports: [],
  controllers: [AgenciesController],
  providers: [AgenciesService],
})
export class AppModule {}
