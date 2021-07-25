import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  today = new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).slice(0, 10);
  todayColor

  ngOnInit(): void {
  }
  showToday = (date) => {
    this.today = date.toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).slice(0, 10)
  }

  todayStyle = (date) => {
    let today = new Date;
    let style = { 'background-color': '' }
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) {
      style['background-color'] = 'lightgreen'
    } else if (date.getMonth() != today.getMonth()) {
      style['background-color'] = 'rgba(0,0,0,.1)'
    } else {
      style['background-color'] = 'rgba(0,0,0,.3)'
    }
    return style
  }
  createDateArray = () => {
    var getDaysArray = function (start, end) {
      for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
      }
      return arr;
    };
    function startOfMonth() {
      let startMonth = new Date();
      startMonth.setDate(1);
      if (startMonth.getDay() > 1) {
        startMonth.setDate(2 - startMonth.getDay())
      };
      return startMonth;
    }
    function endOfMonth(date) {
      let endMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      if (endMonth.getDay() < 7) {
        endMonth.setDate(endMonth.getDate() + 7 - endMonth.getDay())
      };
      return endMonth;
    };
    let startDate = startOfMonth();
    let endDate = endOfMonth(new Date());
    endDate.setDate(endDate.getDate() + 1);
    function setWeek(dateArray) {
      let result = [];
      let temp = [];
      dateArray.forEach(date => {
        temp.push(date);
        if (date.getDay() % 7 === 0) {
          result.push(temp);
          temp = []
        }
      });
      return result
    }
    return setWeek(getDaysArray(startDate, endDate))
  }
}
