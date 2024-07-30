import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user.interfaces';
import { v4 as uuidv4  } from 'uuid';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnChanges{

  @Input()
  public userByUp!: User;

  @Output()
  public addUserFomr: EventEmitter<User> = new EventEmitter();

  @Output() 
  public updateUserEvent: EventEmitter<User> = new EventEmitter()

  public btnActiveEdit:boolean = false;
  public btnAddUsr:boolean = false;

  public initalFormValue = {
    id:uuidv4() ,
    fechaCreacion: Date(),
    fetchaUpdat: ''
  }

  public myForm:FormGroup = this.fb.group({
    id: [this.initalFormValue.id ] ,
    numeroId:['',[Validators.required,  Validators.minLength(10)]],
    nombre:['',[Validators.required,  Validators.minLength(3)]],
    direccion:['',[Validators.required]],
    correo:['',[Validators.required,  Validators.email]],
    numero:[,[Validators.required,  Validators.minLength(10)]],
    telefono:[,[Validators.required,  Validators.minLength(6)]],
    fechaCreation:[this.initalFormValue.fechaCreacion ],
    fechaUpdate: [this.initalFormValue.fetchaUpdat]
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
      this.addUserFomr.emit( this.myForm.value);
      this.resetForm();
      return
    }
  }

  resetForm(){
    this.myForm.reset({
      ...this.initalFormValue,
      id: uuidv4(),
      fechaCreation: Date(),
      fetchaUpdat: ''
    })
  }

  onUpdate(): void {
    if (this.myForm.valid && this.userByUp) {
      this.myForm.patchValue({
        fechaUpdate: Date()
      });
      this.updateUserEvent.emit(this.myForm.value);
      this.resetForm();
      this.btnActiveEdit = false;
      this.btnAddUsr = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userByUp'] && changes['userByUp'].currentValue) {
      this.myForm.patchValue(changes['userByUp'].currentValue);
      
      this.btnActiveEdit = true;
      this.btnAddUsr = true;
    }
  }
}


