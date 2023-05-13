import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component';
import { AlojamientosRoutingModule } from './alojamientos.routing.module';
import { NuevaHabitacionComponent } from './pages/nueva-habitacion/nueva-habitacion.component';



@NgModule({
  declarations: [
    NuevaHabitacionComponent,
    LayoutPageComponent,
    ReservePageComponent
  ],
  imports: [
    AlojamientosRoutingModule,
    CommonModule,

  ],
  exports:[
    LayoutPageComponent,
    ReservePageComponent
  ]
})
export class AlojamientosModule { }
