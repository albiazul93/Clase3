import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();
  persona: Persona;
  @ViewChild('personaForm') formulario: NgForm;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.persona = new Persona();
  }

  guardar() {
    if (this.formulario.valid) {
      this.personaService.agregar(this.persona).subscribe({
        next: (persona: Persona) => {
          console.log(persona);
          this.onConfirmar.emit()
        },
        error: () => {
          alert('error al guardar');
        }
      });
      ;
    }
  }
  cancelar() {
    this.onCancelar.emit();
  }
}
