import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from '../../../interfaces/produc.interfaces';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  @Output()
  public addProductFomr: EventEmitter<Productos> = new EventEmitter();

  public myForm:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    marca:['',[Validators.required, Validators.minLength(3) ]],
    provedor:['',[Validators.required, Validators.minLength(3)]],
    categoria:['',[Validators.required ,Validators.minLength(3)]],
    cantidad:[ ,[Validators.required, Validators.min(0)]],
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
           return `Minimo ${ errors['minlength'].requiredLength } caracteres `;
        case 'min':
          return 'Las existencias deben de ser 0 o mayor'
        
      }
    }

    return '';
  }

  onSave(): void{
    if(this.myForm.valid){
      this.addProductFomr.emit( this.myForm.value);
      this.myForm.reset()
      return
    }
  }



}
