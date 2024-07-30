import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map, tap } from 'rxjs';
import { ProductServicesService } from '../../services/produc.service';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-grafic',
  templateUrl: './bar-grafic.component.html',
  styleUrl: './bar-grafic.component.css'
})
export class BarGraficComponent {

  chart: any;
  public months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  labels!: string[];
  data!: number[];


constructor(
    private srvProduct: ProductServicesService
){}


getProduct(){
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

  this.createBarGrafic();
}

createBarGrafic() {
  this.chart = new Chart('MyBarChart', {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Cantidad de productos comprados por mes',
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(81, 224, 107,0.2)',
            'rgba(254, 59, 59,0.2)',
            'rgba(59,221,254,0.2)',
            'rgba(160, 59, 254,0.2)',
            'rgba(255, 171, 230,0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(81, 224, 107)',
            'rgb(254, 59, 59)',
            'rgb(59,221,254)',
            'rgb(160, 59, 254)',
            'rgb(255, 171, 230)'
          ],
          borderWidth: 2
        }]
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


  ngOnInit(): void {
    this.getProduct();
  }



}
