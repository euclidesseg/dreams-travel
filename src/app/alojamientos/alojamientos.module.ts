import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component';
import { AlojamientosRoutingModule } from './alojamientos.routing.module';
import { NuevaHabitacionComponent } from './pages/nueva-habitacion/nueva-habitacion.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HabitacionService } from './services/habitacion.service';
import { MaterialModule } from '../material/material.module';
import { HabitacionCardComponent } from './components/habitacion-card/habitacion-card.component';



@NgModule({
  declarations: [
    NuevaHabitacionComponent,
    LayoutPageComponent,
    ReservePageComponent,
    ToolbarComponent,
    HabitacionCardComponent
  ],
  exports:[
    LayoutPageComponent,
    ReservePageComponent
  ],
  imports: [
    AlojamientosRoutingModule,
    CommonModule,
    MaterialModule

  ],
  providers:[
    HabitacionService
  ]
})
export class AlojamientosModule { }
