import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css']
})
export class PersonaContenedorComponent implements OnDestroy {
  formularioVisible: boolean = false;
  listadoPersonas: Persona[] = [];

  private subscription = new Subscription();
  

  constructor(private servicioPersona: PersonaService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  mostrarFormulario(visible: boolean) {
    this.formularioVisible = visible;
  }
  actualizarListado() {

    const obtenerSubscription = this.servicioPersona.obtenerListado().subscribe({
      next: (listado: Persona[]) =>{
        //exito
        this.listadoPersonas = listado;
      },
      error: () => {
        //error
        alert('error');
      }
    });

    this.subscription.add(obtenerSubscription);

    this.mostrarFormulario(false);
  }
  

}
