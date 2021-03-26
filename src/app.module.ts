import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebModule } from './web/web.module';
import { LandingController } from './landing/landing.controller';

@Module({
  imports: [WebModule],
  controllers: [AppController, LandingController],
  providers: [AppService],
})
export class AppModule {}
