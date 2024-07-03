import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  public myForm:FormGroup = this.fb.group({
    numero:['',[Validators.required,  Validators.minLength(10)]],
    nombre:['',[Validators.required,  Validators.minLength(3)]],
    direccion:['',[Validators.required]],
    correo:['',[Validators.required,  Validators.email]],
    numer:['',[Validators.required,  Validators.minLength(10)]],
  })

  constructor(
    private fb: FormBuilder
  ){}


  isValidField( field:string, ){
    return this.myForm.controls[field].errors 
      &&  this.myForm.controls[field].touched;
  }

  getFieldError(field:string): string| null{
    if( !this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for( const key of Object.keys(errors) ){
      switch(key){
        case 'required':
          return 'este campo es requerido';
        case 'minlength':
           return `Minimo ${ errors['minlength'].requiredLength } `;
        case 'email':
          return 'no contiene el formato de correo';
        
      }
    }

    return '';
  }

  onSave(): void{
    if(this.myForm.valid){
      this.myForm.reset()
      console.log('guardado exitosamente');
      return
    }
    console.log(this.myForm.value, this.myForm.valid);


  }


}
