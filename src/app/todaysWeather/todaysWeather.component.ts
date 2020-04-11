import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todaysWeather',
  templateUrl: './todaysWeather.component.html',
  styleUrls: ['./todaysWeather.component.css']
})
export class TodaysWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  
  {
    this.data_thermometer = {
      chart: {
        caption: "Today's Temperature",
        subcaption: "(degree Celsius)",
        lowerlimit: "120",
        upperlimit: "200",
        numbersuffix: "°F",
        thmfillcolor: "#008ee4",
        showgaugeborder: "1",
        gaugebordercolor: "#008ee4",
        gaugeborderthickness: "2",
        theme: "candy",
        showvalue: "1"
      },
      value: "140"
    };
    this.TheromometerDataSource = this.data_thermometer;

    this.data_pressureGauge = {
      chart: {
        caption: "Today's Air Pressure",
        subcaption: "(Pa)",
        captionpadding: "0",
        origw: "320",
        origh: "300",
        gaugeouterradius: "115",
        gaugestartangle: "270",
        gaugeendangle: "-25",
        showvalue: "1",
        valuefontsize: "30",
        majortmnumber: "13",
        majortmthickness: "2",
        majortmheight: "13",
        minortmheight: "7",
        minortmthickness: "1",
        minortmnumber: "1",
        showgaugeborder: "0",
        theme: "candy"
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "110",
            code: "#999999"
          },
          {
            minvalue: "110",
            maxvalue: "280",
            code: "#F6F6F6"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "110",
            bgcolor: "#F20F2F",
            basewidth: "8"
          }
        ]
      },
      annotations: {
        groups: [
          {
            items: [
              {
                type: "text",
                id: "text",
                text: "Pa",
                x: "$gaugeCenterX",
                y: "$gaugeCenterY + 40",
                fontsize: "20",
                color: "#555555"
              }
            ]
          }
        ]
      }
    } ;
    this.PressureGaugeDataSource=this.data_pressureGauge ;
  }

  
  data_thermometer ;
  TheromometerDataSource ;
  TheromometerWidth = 500;
  TheromometerHeight = 400;
  TheromometerType = "thermometer";
  TheromometerDataFormat = "json";

  width = 500;
  height = 400;
  type = "angulargauge";
  dataFormat = "json";
  PressureGaugeDataSource ;
  data_pressureGauge ;
  
  

  
}
