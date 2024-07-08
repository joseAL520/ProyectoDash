import { Component, Input } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'shared-user-conteiner',
  templateUrl: './user-conteiner.component.html',
  styleUrl: './user-conteiner.component.css'
})
export class UserConteinerComponent {

  @Input()
  public titulo: string = '';

  constructor(){
    
  }

}
