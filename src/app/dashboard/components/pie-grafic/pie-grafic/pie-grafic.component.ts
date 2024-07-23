import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProductServicesService } from '../../../services/produc.service';
import { map, tap } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-grafic',
  templateUrl: './pie-grafic.component.html',
  styleUrl: './pie-grafic.component.css'
})
export class PieGraficComponent implements OnInit {
  

  chartPie: any
  public productCategory: string[] =[  "Electrónica","Ropa","Alimentos","Hogar","Deportes","Salud"];
  public data: number[] = [];
  public label: string[] = [];
  
  constructor(
    private srvProduct: ProductServicesService
  ){}

  coloGenerator(){
    const colores: any[] =[]
    this.productCategory.forEach( () => {
      let r = Math.floor(Math.random() * 128) + 127; // Rango: 127 a 255
      let g = Math.floor(Math.random() * 128) + 127; // Rango: 127 a 255
      let b = Math.floor(Math.random() * 128) + 127; // Rango: 127 a 255 
      let color = `rgb(${r}, ${g}, ${b})`;
      colores.push(color)
    });
    return colores
  }



  getProductValue(){
      this.srvProduct.getProductList().pipe(
        map( value => value.map(  product => ({
          categoria: product.categoria,
          cantidad: product.cantidad
        }))),
        tap( rel => this.updatePieDiagram(rel))
      ).subscribe()
  }


  updatePieDiagram( data:{ cantidad:number , categoria:string }[] ){
    
    // Crear un objeto para agrupar las cantidades por categoria
    const categoriTotals: { [key: string]: number } = {};
    
     data.forEach( item => {
      if( categoriTotals[item.categoria] ){
        categoriTotals[item.categoria] += item.cantidad;
      }else{
        categoriTotals[item.categoria] = item.cantidad;
      }
    });
    

    // filtrar y ordenar las categoria segun 
    const filterCatego = this.productCategory.filter( categ => categoriTotals[categ] !== undefined);
    const filterData =  filterCatego.map( categ => categoriTotals[categ]);
    
    this.label = filterCatego;
    this.data = filterData;

    this.createPiegrafic();

  }

  createPiegrafic(){

    this.chartPie = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: this.label,
        datasets: [
        {
          label:'cantidad',
          data: this.data,
          backgroundColor: this.coloGenerator(),

        },
      ]
    }});

  }

  ngOnInit(): void {

    this.getProductValue();

  }

}
