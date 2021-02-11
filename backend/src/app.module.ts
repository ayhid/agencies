import { Module } from '@nestjs/common';
import { AgenciesController } from './agencies/agencies.controller';
import { AgenciesService } from './agencies/agencies.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AgenciesController],
  providers: [AppService, AgenciesService],
})
export class AppModule {}
