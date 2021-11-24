import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  //inyectar el servicio creado
  constructor(private serviceEquipo:  EquipoService) { }

  ngOnInit(): void {
    this.traerEquipos();
  }

  //crear un método que me ejecute el service
  traerEquipos(){
    this.serviceEquipo.traerEquipos().subscribe(data =>{
      console.log(data);
    })
  }


}
