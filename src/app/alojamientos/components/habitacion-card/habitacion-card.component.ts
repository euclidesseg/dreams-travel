import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from '../../interfaces/habitacion.model';

@Component({
  selector: 'habitacion-card',
  templateUrl: './habitacion-card.component.html',
  styleUrls: ['./habitacion-card.component.css']
})
export class HabitacionCardComponent implements OnInit {

  @Input() public habitacion!:Habitacion
  
  ngOnInit(): void {
    if(!this.habitacion){
      throw Error('Habitacion property is required')
    }
  }

  
}
