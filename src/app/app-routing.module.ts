import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes =
[
  {
      path:'dreams-travel',
      loadChildren: () => import ('./alojamientos/alojamientos.module').then((module) => module.AlojamientosModule)
  },

  {
      path: '',
      redirectTo:'dreams-travel',
      pathMatch: "full"
  },

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
