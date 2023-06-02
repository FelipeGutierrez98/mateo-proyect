import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './pages/cars/cars.component';
import { HeadersComponent } from './components/headers/headers.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './components/filter/filter.component';




@NgModule({
  declarations: [
    CarsComponent,
    HeadersComponent,
    CarbyidComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CarsComponent,
    HeadersComponent,
    CarbyidComponent
  ]
})
export class DashboardModule { }
