import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReservePageComponent } from "./pages/reserve-page/reserve-page.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { NuevaHabitacionComponent } from "./pages/nueva-habitacion/nueva-habitacion.component";


const routes:Routes =
[
  {
      path:'',
      component:LayoutPageComponent,
      children:[
            { path: 'reserve',component:ReservePageComponent },
            { path: 'new-habitacion',component:NuevaHabitacionComponent },
            { path: '**',redirectTo:'reserve'},
      ]

  },



]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AlojamientosRoutingModule{}
