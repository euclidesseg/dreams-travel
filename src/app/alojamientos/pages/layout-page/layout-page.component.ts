import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  constructor(private route:Router){

  }

  isCloseNav : Boolean = false

  public sidebarItems = [

    {   label:'Alojamientos', icon:'pi pi-home',url:'./reserve'},

    {   label:'Nueva', icon:'pi pi-save',url:'./new-habitacion' },
  ]
  closeNav(){
    this.isCloseNav = !this.isCloseNav
  }
  navigate(route:string){
    this.route.navigateByUrl(route)
  }
}
