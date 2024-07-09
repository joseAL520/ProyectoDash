import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-grafic',
  templateUrl: './line-grafic.component.html',
  styleUrl: './line-grafic.component.css'
}) 
export class LineGraficComponent implements OnInit {
  
  chart: any
  public months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  
  ngOnInit(): void {
    
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
      ]
    }});
  }



}
