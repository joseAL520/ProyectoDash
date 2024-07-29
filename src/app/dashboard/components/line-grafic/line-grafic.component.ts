

import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map, tap } from 'rxjs';
import { ProductServicesService } from '../../services/produc.service';

Chart.register(...registerables);

@Component({
  selector: 'app-line-grafic',
  templateUrl: './line-grafic.component.html',
  styleUrls: ['./line-grafic.component.css']
})
export class LineGraficComponent implements OnInit {

  chart: any;
  public months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  labels!: string[];
  data!: number[];

  constructor(private srvProduct: ProductServicesService) {}

  getProduct() {
    this.srvProduct.getProductList().pipe(
      map(value => value.map(producto => ({
        month: this.getMonthName(new Date(producto.fechaCreation)),
        cantidad: producto.cantidad
      }))),
      tap(val => this.updateChartData(val))
    ).subscribe();
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

  createLineGrafic() {
    const canvas = document.getElementById('MyLineChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Crear un gradiente lineal
      const gradient = ctx.createLinearGradient(0, 0, 170,  canvas.height);
      gradient.addColorStop(0.20, 'rgba(0,35,255,1)');  
      gradient.addColorStop(0.36, 'rgba(169,59,196,1)'); 
      gradient.addColorStop(0.64, 'rgba(203,35,118,1)'); 
      gradient.addColorStop(0.70, 'rgba(255,0,0,1)');    

      // Crear el gráfico
      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Cantidad de productos comprados por mes',
              data: this.data,
              fill: false,
              borderColor: gradient, // Usar el gradiente como color de la línea
              tension: 0.1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  ngOnInit(): void {
    this.getProduct();
  }
}