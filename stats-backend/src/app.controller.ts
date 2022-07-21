import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateStatRequest } from './Dto/create-stat-request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('statistics')
  getStats() {
    return this.appService.getStats();
  }

  @Get('statistics/:startDate/:endDate')
  getStatsRange(@Param('startDate') startDate: Date, @Param('endDate') endDate: Date) {
    return this.appService.getStatsRange(startDate, endDate);
  }

  @Post('statistics')
  setStats(@Body() createStatRequest: CreateStatRequest) {
    try {
      return this.appService.setStats(createStatRequest);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.PRECONDITION_FAILED);
    }
  }

  @Post('statistics/clear')
  clearStats() {
    return this.appService.clearStats();
  }
}
