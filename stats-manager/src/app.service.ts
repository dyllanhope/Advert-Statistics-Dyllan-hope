import { Injectable } from '@nestjs/common';
import { stat } from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private statsList: any[] = [];

  getStats() {
    return this.statsList;
  }

  getStatsRange(rangeItem) {
    var filteredList = [];

    let localeStartDate = rangeItem.startDate.split('T');
    let dateStartArr = localeStartDate[0].split('-');
    let formattedStartDate = new Date(parseInt(dateStartArr[0]), parseInt(dateStartArr[1]) - 1, parseInt(dateStartArr[2]) + 1);

    let localeEndDate = rangeItem.endDate.split('T');
    let dateEndArr = localeEndDate[0].split('-');
    let formattedEndDate = new Date(parseInt(dateEndArr[0]), parseInt(dateEndArr[1]) - 1, parseInt(dateEndArr[2]) + 1);

    this.statsList.forEach(stat => {
      if (formattedEndDate >= stat.date && formattedStartDate <= stat.date) {
        filteredList.push(stat);
      }
    });

    return filteredList;
  }

  setStats(data) {
    data.id = uuidv4();
    data.date = new Date(data.date);
    this.statsList.push(data);
  }

  clearStats() {
    this.statsList = [];
  }

}
