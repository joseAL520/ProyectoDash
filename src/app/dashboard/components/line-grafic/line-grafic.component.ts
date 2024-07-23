import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';

import { map, tap } from 'rxjs';
import { ProductServicesService } from '../../services/produc.service';
Chart.register(...registerables);

@Component({
  selector: 'app-line-grafic',
  templateUrl: './line-grafic.component.html',
  styleUrl: './line-grafic.component.css'
}) 
export class LineGraficComponent implements OnInit {
  
  chart: any
  public months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  labels!: string[];
  data!: number[];
  

  constructor(
    private srvProduct:ProductServicesService
  ){}


  getProduct(){
    this.srvProduct.getProductList().pipe(
      // si deseo tomar dos valores o mas especifico de mi servio
      map(value => value.map(producto => ({
        month: this.getMonthName( new Date( producto.fechaCreation ) ),
        cantidad: producto.cantidad
      }))),
      tap(val => this.updateChartData(val))
    ).subscribe()

  }

  getMonthName(date: Date): string {
    const monthIndex = date.getMonth(); // Obtiene el índice del mes (0-11)
    return this.months[monthIndex]; // Devuelve el nombre del mes correspondiente
  }

  updateChartData(data: { month: string, cantidad: number }[]) {
    
    // Crear un objeto para agrupar las cantidades por mes
    const monthTotals: { [key: string]: number } = {};

   data.forEach(item => {
       if (monthTotals[item.month]) {
         monthTotals[item.month] += item.cantidad; // Sumar la cantidad si el mes ya existe
       } else {
         monthTotals[item.month] = item.cantidad; // Crear nueva entrada si el mes no existe
       }
    });

  
    
   // Filtrar y ordenar los meses según `this.months`
   const filteredMonths = this.months.filter(month => monthTotals[month] !== undefined);
   const filteredData = filteredMonths.map(month => monthTotals[month]);

   this.labels = filteredMonths;
   this.data = filteredData;

   this.createLineGrafic();
  }

  createLineGrafic(){
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
        {
          label: 'Cantidad de productos comprados por mes',
          data: this.data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
      ]
    }});
  }

  ngOnInit(): void {
   this.getProduct();
  }

}
