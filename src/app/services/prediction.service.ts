import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment' ;

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  
  baseUrl = environment.baseUrl; 
  constructor(@Inject(HttpClient) private http: HttpClient) { }

  weatherAPI() 
{
    
    return this.http.get(this.baseUrl+ 'SmartEnergy/weather-forecast') ;
    
}

onPredictEnergyAPI(type) {

    return this.http.get(this.baseUrl+ 'SmartEnergy/predict/'+type) ;
    
}



}
