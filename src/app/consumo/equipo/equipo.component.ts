import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

//Importo el modelo
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  //Array que contiene la información traida del servidor
  equipos:Equipo[] = [];

  dato = {
    "id":"13456",
    "nombre":"Bogotá"
  }


  //inyectar el servicio creado
  constructor(private serviceEquipo:  EquipoService) { }

  ngOnInit(): void {
    this.traerEquipos();
    console.log(this.dato)
    this.guardarEquipos()
  }

  //crear un método que me ejecute el service
  traerEquipos(){
    this.serviceEquipo.traerEquipos().subscribe((data: any)=>{
      this.equipos=data
    })
  }

  guardarEquipos(){
    this.serviceEquipo.enviarEquipo(this.dato).subscribe((data: any)=>{
      
    console.log(data)

    })
  }

}
