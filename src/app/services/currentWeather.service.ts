import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment' ;

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  
  baseUrl = environment.baseUrl; 
  constructor(@Inject(HttpClient) private http: HttpClient) { }

getTodaysWeather() :Observable<any>
{
    
    return this.http.get(this.baseUrl+ 'SmartEnergy/today-weather') ;
    
}

getWeeklyData() {
 
   return this.http.get(this.baseUrl+ 'SmartEnergy/weekly-weather') ;
}



}
