import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  currDate: string
  date = new Date(); ;
  constructor(private datePipe: DatePipe) {
    this.currDate = this.datePipe.transform(this.date, 'dd-MMM-yyyy');
   }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
     
      /************************energy required  ********************************************************/
      const dataDailySalesChart: any = {
          labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
          series: [
              [500, 250,250,250,250,250,400,600,700,1400,2100,2400,2200,2300,2300,2100,2200,1900,1900,2400,1700,900,600,400]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 10
          }),
          low: 100,
          high: 3000, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      /************************solar energy required  ********************************************************/
      const datawebsiteViewsChart: any = {
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        series: [
          [500, 250,250,250,250,250,400,600,700,1400,2100,2400,2200,2300,2300,2100,2200,1900,1900,2400,1700,900,600,400]
      ]
      };

     const optionswebsiteViewsChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 2500, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
          
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', datawebsiteViewsChart, datawebsiteViewsChart);

      this.startAnimationForLineChart(completedTasksChart);


      /************************wind energy required  ********************************************************/

     

      const dataCompletedTasksChart: any = {
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        series: [
          [500, 250,250,250,250,250,400,600,700,1400,2100,2400,2200,2300,2300,2100,2200,1900,1900,2400,1700,900,600,400]
      ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 2500, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
          
      }

      var websiteViewsChart = new Chartist.Line('#websiteViewsChart', dataCompletedTasksChart, optionsCompletedTasksChart);

     
      this.startAnimationForLineChart(websiteViewsChart);
      /************************Mismatch  energy required  ********************************************************/

     

      const dataMismatchEnergy: any = {
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        series: [
          [500, 250,250,250,250,250,400,600,700,1400,2100,2400,2200,2300,2300,2100,2200,1900,1900,2400,1700,900,600,400],
          [400, 150,150,150,150,350,500,600,400,1300,2000,1400,2100,2300,2300,2100,2200,1900,1900,2400,1700,900,600,400]
      ]
      };

     const optionsMismatchEnergy: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 2500, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
          
      }

      var MismatchEnergyChart = new Chartist.Line('#MismatchEnergyChart', dataMismatchEnergy, optionsMismatchEnergy);

     
      this.startAnimationForLineChart(MismatchEnergyChart);



     
    }

}
