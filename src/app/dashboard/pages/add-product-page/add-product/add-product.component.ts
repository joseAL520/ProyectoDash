import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaProduct, CATEGORIAS, Productos } from '../../../interfaces/produc.interfaces';
import { v4 as uuidv4  } from 'uuid';
@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnChanges{

  @Input()
  public productByUp!: Productos;

  @Output()
  public addProductFomr: EventEmitter<Productos> = new EventEmitter();

  @Output() 
  public updateUserEvent: EventEmitter<Productos> = new EventEmitter()

  public btnActiveEdit:boolean = false;
  public btnAdd:boolean = false;


  categorias: CategoriaProduct[] = CATEGORIAS;

  public initalFormValue = {
    id:uuidv4() ,
    fechaCreacion: Date(),
    fetchaUpdat: ''
  }
  
  public myForm:FormGroup = this.fb.group({
    id:[ this.initalFormValue.id],
    nombre:['',[Validators.required, Validators.minLength(3)]],
    marca:['',[Validators.required, Validators.minLength(3) ]],
    provedor:['',[Validators.required, Validators.minLength(3)]],
    categoria:['',[Validators.required ]],
    cantidad:[ ,[Validators.required, Validators.min(0)]],
    fechaCreation:[ this.initalFormValue.fechaCreacion ],
    fechaUpdate: [this.initalFormValue.fetchaUpdat],
    precio:[,[Validators.required, Validators.min(0)]]
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
      this.reset()
      return
    }
    
  }

  reset(){
    this.myForm.reset({
      ...this.initalFormValue,
      id: uuidv4(),
      fechaCreation: Date(),
      fetchaUpdat: ''
    })
  }

  onUpdate(): void {
    if (this.myForm.valid && this.productByUp) {
      this.myForm.patchValue({
        fechaUpdate: Date()
      });
      this.updateUserEvent.emit(this.myForm.value);
      this.reset();
      this.btnActiveEdit = false;
      this.btnAdd = false;
      return
    }
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productByUp'] && changes['productByUp'].currentValue) {
      this.myForm.patchValue(changes['productByUp'].currentValue);
      
      this.btnActiveEdit = true;
      this.btnAdd = true;
    }
  }



}
