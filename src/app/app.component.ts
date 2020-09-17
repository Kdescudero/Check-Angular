import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form: FormGroup;
  title = "CodeSandbox";
  array: Array<Object> = [
    {
      SelectSesion: false,
      duracionSesion: "60",
      fecha: "2020-09-14",
      horaFin: "07:00",
      horaInicio: "06:00",
      idsesiones: 15,
      lugar: "Molinos",
      nombre: "Sesión 2"
    },

    {
      SelectSesion: false,
      duracionSesion: "60",
      fecha: "2020-09-14",
      horaFin: "08:00",
      horaInicio: "07:00",
      idsesiones: 16,
      lugar: "Molinos",
      nombre: "Sesión 3"
    },

    {
      SelectSesion: false,
      duracionSesion: "60",
      fecha: "2020-09-14",
      horaFin: "09:00",
      horaInicio: "08:00",
      idsesiones: 17,
      lugar: "Molinos",
      nombre: "Sesión 4"
    },

    {
      SelectSesion: false,
      duracionSesion: "60",
      fecha: "2020-09-14",
      horaFin: "10:00",
      horaInicio: "09:00",
      idsesiones: 18,
      lugar: "Molinos",
      nombre: "Sesión 5"
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
  }

  _onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get("checkArray") as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }
}
