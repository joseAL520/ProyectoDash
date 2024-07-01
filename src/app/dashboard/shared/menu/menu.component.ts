import { Component } from '@angular/core';



interface MenuItem {
  title:string,
  route:string,
  icon:string
}

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [
    {
      title: 'Panel Principal', route: './dashboard/dashboard',
      icon: 'https://cdn-icons-png.flaticon.com/512/10299/10299193.png'
    },
    {
      title: 'Agregar Producto', route: './dashboard/add-product',
      icon: 'https://cdn-icons-png.flaticon.com/512/7387/7387315.png'
    },
    {
      title: 'Agregar Usuario', route: './dashboard/add-User',
      icon: 'https://cdn-icons-png.flaticon.com/512/4175/4175032.png'
    }
  ];

}
