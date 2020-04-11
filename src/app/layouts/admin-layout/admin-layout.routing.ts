import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { WeatherForecastComponent } from '../../weather-forecast/weather-forecast.component';
import { WindEnergyComponent } from '../../windEnergy/windEnergy.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { SolarEnergyComponent } from '../../solarEnergy/solarEnergy.component';
import {SolarPowerPlantComponent} from '../../solarEnergy/solarPowerPlant/solarPowerPlant.component' ;
import { TodaysWeatherComponent } from '../../todaysWeather/todaysWeather.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'todays-weather',      component: TodaysWeatherComponent },
    { path: 'weather-Forecast',   component: WeatherForecastComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'solarEnergy',  component: SolarEnergyComponent },
    { path: 'solarEnergy/solarPowerPlant/:id',  component: SolarPowerPlantComponent },
    { path: 'windEnergy',  component: WindEnergyComponent },
    { path: 'windEnergy/windPowerPlant',  component: SolarPowerPlantComponent },
];

