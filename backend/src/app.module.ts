import { Module } from '@nestjs/common';
import { AgenciesModule } from './agencies/agencies.module';
@Module({
  imports: [AgenciesModule],
})
export class AppModule {}
