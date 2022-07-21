import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateStatRequest } from './Dto/create-stat-request';
import { CreateStatEvent } from './Event/create-stat-event';

@Injectable()
export class AppService {
  constructor(@Inject('STATISTICS') private readonly statisticsClient: ClientProxy) { }

  getStats() {
    console.log('getStats - Fetching all stats');

    return this.statisticsClient.send({ cmd: 'get_statistics' }, {});
  }

  getStatsRange(startDate, endDate) {

    let localeStartDate = new Date(startDate).toLocaleDateString('en-CA');
    let localeEndDate = new Date(endDate).toLocaleDateString('en-CA');

    let rangeItem = { startDate: localeStartDate, endDate: localeEndDate };

    console.log('getStatsRange - fetching all stats between a range:', rangeItem);

    return this.statisticsClient.send({ cmd: 'get_statistics_range' }, rangeItem);
  }

  setStats(data: CreateStatRequest) {
    console.log('setStats - Setting statistics for ', data);

    // let dateArr = data.date.split('-');
    // let formattedDate = new Date(parseInt(dateArr[0]), parseInt(dateArr[1]) - 1, parseInt(dateArr[2]) + 1);
    let formattedDate = new Date(data.date).toLocaleDateString('en-CA');

    if (formattedDate == data.date.toString()) {
      this.statisticsClient.emit(
        'create_stat',
        new CreateStatEvent(data.date, data.views, data.clicks, data.cost)
      );
    } else {
      throw new RpcException('Invalid Date format. Please ensure the date is correct and in the format yyyy-MM-dd');
    }
  }

  clearStats() {
    console.log('clearStats - clearing statistics ');
    this.statisticsClient.emit('clear_stats', {});
  }
}
