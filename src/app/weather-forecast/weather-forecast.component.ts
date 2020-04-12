import { Component, OnInit } from '@angular/core';
import {CurrentWeatherService} from '../services/currentWeather.service'


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'] ,
  providers : [CurrentWeatherService]
})
export class WeatherForecastComponent implements OnInit {

  constructor(private currentWeatherService : CurrentWeatherService) { }
  WeeklyWeatherData ;

  ngOnInit() {

    this.currentWeatherService.getWeeklyData() 
        .subscribe((response)=>{
          console.log(response) ;
          this.WeeklyWeatherData = response  ;
        })
  }
  

  
}
