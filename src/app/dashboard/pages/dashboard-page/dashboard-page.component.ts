import { Component } from '@angular/core';

interface MenuItem {
  title:string,
  type:string,
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  public titulo:string = 'Panel de control'

  public menuDash: MenuItem[] = [
    {
      title: 'Diagrama de Line',
      type: 'line',
      
    },
    {
      title: 'Diagrama de pastel',
      type: 'pie',
    }
  ]
  public itemMenu: string = 'line'

  diagramType( type:string  ){
    return   this.itemMenu = type;
  }



}
