import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit, OnDestroy {
  @Output() onNuevaPersona = new EventEmitter();
  
  @Input() listado: Persona[];

  private subscription = new Subscription();

  constructor(private servicioPersona: PersonaService) {}

  ngOnInit(): void {
    this.actualizarListado()
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  agregarPersona() {
    this.onNuevaPersona.emit();
  }

  actualizarListado(){
    this.subscription.add(
      this.servicioPersona.obtenerListado().subscribe({
        next: (listado: Persona[]) => {
          //exito
          
          this.listado = listado;
        },
        error: () => {
          //error
          alert('error');
        },
      })
    );
  }

  
}
