import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../interfaces/habitacion.model';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-reserve-page',
  templateUrl: './reserve-page.component.html',
  styleUrls: ['./reserve-page.component.css']
})
export class ReservePageComponent implements OnInit{

  public habitaciones:Habitacion[] = []
  constructor(private habitacionService: HabitacionService){}

  ngOnInit(): void {
   this.getAllHabitaciones()
  }
  getAllHabitaciones(){
    this.habitacionService.getHabitaciones()
    .subscribe({
      next:(response) => {this.habitaciones = response},
      error:(err) => console.log("sucedio un error en la suscripcion al servicio",err)
    })
  }
}
