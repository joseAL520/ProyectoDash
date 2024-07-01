import { Component } from '@angular/core';



interface MenuItem {
  title:string,
  route:string
}

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [
    {title:'dashboard', route:'./dashboard/dashboard'},
    {title:'add-product', route:'./dashboard/add-product'},
    {title:'add-User', route:'./dashboard/add-User'}
  ];

}
