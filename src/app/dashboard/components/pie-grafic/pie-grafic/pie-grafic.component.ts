import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-grafic',
  templateUrl: './pie-grafic.component.html',
  styleUrl: './pie-grafic.component.css'
})
export class PieGraficComponent implements OnInit {
  

  chartPie: any
  public productCategory: string[] =[ "Electrónica","Ropa y accesorios","Alimentos y bebidas","Hogar y cocina","Juguetes y juegos"];
  
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


  ngOnInit(): void {

    this.chartPie = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: this.productCategory,
        datasets: [
        {
          label:'cantidad',
          data: [65, 59, 80, 81, 56],
          backgroundColor: this.coloGenerator(),

        },
      ]
    }});

     

  }
}
